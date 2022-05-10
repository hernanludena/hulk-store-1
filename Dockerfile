FROM nginx:alpine
# use a volume is more efficient and speed that filesystem
VOLUME /tmp
RUN rm -rf /usr/share/nginx/html/*
COPY nginx.conf /etc/nginx/nginx.conf
COPY hulk-store-pred /usr/share/nginx/html/hulk-store-pred
COPY hulk-store-prod /usr/share/nginx/html/hulk-store-prod
#expose app and 80 for nginx app
EXPOSE 80 81
CMD ["nginx", "-g", "daemon off;"]