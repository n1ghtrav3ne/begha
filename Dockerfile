FROM node:latest as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . /app
RUN node -v
RUN npm run build

CMD [ "node" , "/app/.output/server/index.mjs" ]

EXPOSE 3000
