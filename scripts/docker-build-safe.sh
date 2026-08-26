#!/usr/bin/env bash
# Builds the production image with a hard, kernel-enforced memory ceiling.
#
# Why this exists: `docker compose build` / `docker compose up --build`
# accept a -m/--memory flag but SILENTLY IGNORE it under BuildKit (the
# default builder today) — see `docker compose build --help`. That means
# an unconstrained build can consume all of the host's RAM, not just the
# build container's, and take down unrelated processes (sshd included) on
# small hosts. `docker build --memory` (this script) is honored by
# BuildKit and actually contains the build inside a cgroup.
#
# Usage:
#   ./scripts/docker-build-safe.sh [memory_cap]
#   ./scripts/docker-build-safe.sh 1024m     # tighter cap on a 1-1.5GB host
#
# Then run it with: docker compose up -d
set -euo pipefail

MEMORY_CAP="${1:-1536m}"

echo "Building with a hard memory cap of ${MEMORY_CAP} (adjust via: $0 <cap>)"
echo "Rule of thumb: keep this at roughly 75% or less of total host RAM,"
echo "so the OS, sshd, and any other running containers keep headroom."
echo

docker build \
  --memory="${MEMORY_CAP}" \
  --memory-swap="${MEMORY_CAP}" \
  -t chatfolio-landing:latest \
  .

echo
echo "Build done. Start it with: docker compose up -d"
