FROM node:22.14.0-alpine AS web_build

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

ARG VITE_NODE_ENV=production
ARG VITE_API_URL=https://api.lux.com
ARG VITE_carrersKey
ARG VITE_contactUsKey

COPY ./package.json ./pnpm-lock.yaml ./

RUN pnpm install 

COPY . .

RUN pnpm build


FROM caddy:2.6.2-alpine

COPY --from=web_build /app/dist /srv/web