# ---------- Build stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

# Reprodutibilidade do pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copia apenas o necessário para resolver dependências
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copia o restante e builda
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

# ---------- Runtime stage ----------
FROM node:18-alpine AS runner
WORKDIR /app

# Compatibilidade (alguns binários nativos precisam)
RUN apk add --no-cache libc6-compat

# Usuário não-root
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copia artefatos do build standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000
CMD ["node", "server.js"]
