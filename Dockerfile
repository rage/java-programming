FROM node:10

COPY . /app
WORKDIR /app

RUN npm install

RUN npm run build && mv /app/public /public
