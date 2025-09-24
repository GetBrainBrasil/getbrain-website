# ---------- Build stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

# pnpm determinístico
RUN corepack enable && corepack prepare pnpm@9.12.0 --activate

# deps (use só pnpm-lock + package.json)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# código + build
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

# ---------- Runtime stage ----------
FROM node:18-alpine AS runner
WORKDIR /app

# compat nativa
RUN apk add --no-cache libc6-compat

# usuário não-root
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# artefatos do standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000
CMD ["node","server.js"]
