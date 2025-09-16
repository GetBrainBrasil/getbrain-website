# syntax=docker/dockerfile:1
FROM node:20-alpine AS deps
RUN corepack enable
WORKDIR /app
# copie apenas manifests para cache eficiente
COPY package.json pnpm-lock.yaml* package-lock.json* ./
# instala com pnpm se existir lock; senão, npm
RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
  if [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  else npm i; fi

FROM node:20-alpine AS builder
RUN corepack enable
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# importante para gerar .next/standalone
# (veja ajuste no next.config abaixo)
RUN if [ -f pnpm-lock.yaml ]; then pnpm build; else npm run build; fi

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
# Next standalone
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
