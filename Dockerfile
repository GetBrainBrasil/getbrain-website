# ---------- build stage ----------
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies (deterministic via package-lock.json)
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest and build
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---------- runtime stage ----------
FROM node:18-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nextjs && adduser -S nextjs -u 1001

# Copy Next.js standalone output
# (requires next.config.js with `output: 'standalone'`)
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public

USER nextjs
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000
CMD ["node","server.js"]
