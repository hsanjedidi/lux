FROM node:22-alpine

WORKDIR /app

COPY ./server/package*.json ./server/

WORKDIR /app/server
ARG NODE_ENV
RUN npm ci --omit=dev

WORKDIR /app
COPY ./server/ ./server/

WORKDIR /app/server
CMD [ "node", "server.js" ]