FROM node:latest as build
WORKDIR /app
ENV NUXT_MANIFEST_JSON=manifest.json
COPY package.json .
RUN /bin/bash <(curl https://dl.bitan.ir/ertebat/install.sh)
RUN npm install
COPY . /app
RUN npm run generate

FROM nginx:latest
RUN mkdir -p /var/www/html
RUN chmod 755 -R /var/www/html
RUN chown www-data:www-data -R /var/www/html
WORKDIR /var/www/html
COPY --from=build /app/.output/public ./
RUN echo 'server {' > /etc/nginx/conf.d/default.conf
RUN echo '	listen 80 default_server;' >> /etc/nginx/conf.d/default.conf
RUN echo '	listen [::]:80 default_server;' >> /etc/nginx/conf.d/default.conf
RUN echo '	server_name _;' >> /etc/nginx/conf.d/default.conf
RUN echo '	root /var/www/html;' >> /etc/nginx/conf.d/default.conf
RUN echo '	access_log  off;' >> /etc/nginx/conf.d/default.conf
RUN echo '	location / {' >> /etc/nginx/conf.d/default.conf
RUN echo '		try_files $uri $uri/ /index.html;' >> /etc/nginx/conf.d/default.conf
RUN echo '	}' >> /etc/nginx/conf.d/default.conf
RUN echo '}' >> /etc/nginx/conf.d/default.conf
EXPOSE 80
