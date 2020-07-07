FROM nginx
EXPOSE 80
COPY dist/myrecipes-front /usr/share/nginx/html