FROM node:22-alpine

WORKDIR /app

COPY package*.json .
RUN npm install --production

COPY ./server .

CMD [ "node", "server.js" ]