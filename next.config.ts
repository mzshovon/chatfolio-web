import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Content-Security-Policy is set per-request in proxy.ts so it can
  // include a fresh nonce for Next.js's own inline hydration scripts.
];

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
  experimental: {
    // Default worker count is CPU count - 1, which OOMs the build on
    // memory-constrained hosts (each worker is a separate process).
    // Scale workers by available memory instead, capped low as a floor.
    memoryBasedWorkersCount: true,
    cpus: 2,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
