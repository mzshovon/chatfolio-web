# syntax=docker/dockerfile:1

FROM node:24-alpine AS base
WORKDIR /app

# --- Dependencies ---------------------------------------------------------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# --- Build ------------------------------------------------------------------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# Cap V8's heap on memory-constrained build hosts so an actual shortage
# surfaces as a clear "heap out of memory" error instead of a silent
# OOM-kill (SIGKILL). Turbopack's own native process sits outside this
# heap, so leave real headroom below the host's actual memory limit —
# e.g. on a 2GB host, 1024-1280 is safer than 1536. Override as needed:
#   docker build --build-arg NODE_OPTIONS="--max-old-space-size=1024" .
ARG NODE_OPTIONS="--max-old-space-size=1024"
ENV NODE_OPTIONS=$NODE_OPTIONS
RUN npm run build

# --- Runtime ------------------------------------------------------------------
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Overridable at runtime: docker run -e PORT=8080 ...
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Next.js "standalone" output: a self-contained server plus only the
# node_modules it actually needs, so the runtime image stays small and
# doesn't require a package install step.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE $PORT

CMD ["node", "server.js"]
