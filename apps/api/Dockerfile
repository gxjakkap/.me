FROM oven/bun:1-alpine AS install
WORKDIR /app

COPY package.json bun.lock ./
COPY apps/api/package.json apps/api/
COPY apps/web/package.json apps/web/
COPY packages/env/package.json packages/env/
RUN bun install --frozen-lockfile --production --ignore-scripts --filter api

FROM oven/bun:1-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=install /app ./
COPY packages/env packages/env
COPY apps/api apps/api

USER bun
WORKDIR /app/apps/api
EXPOSE 3000
CMD ["bun", "run", "src/index.ts"]
