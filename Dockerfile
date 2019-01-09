FROM node:11

COPY . /app
WORKDIR /app

RUN npm ci

RUN npm run build && mv /app/public /public
