FROM nginx:alpine AS production

LABEL maintainer="Muhammad Zahid <mz6366048@gmail.com>"

RUN rm -rf /usr/share/nginx/html/*

# Aapke structure ke hisab se - direct copy
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

HEALTHCHECK --interval=30s CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]