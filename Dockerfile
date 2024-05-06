FROM node:18.20.2 
WORKDIR /app
COPY package.json .
COPY . /app
RUN npm install
RUN node -v
RUN npm run build --force

CMD [ "node" , "/app/.output/server/index.mjs" ]

EXPOSE 3000
