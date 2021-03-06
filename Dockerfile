FROM alpine:3.9

WORKDIR /home/node

RUN addgroup -g 1000 node \
    && adduser -u 1000 -G node -s /bin/sh -D node \
    && apk add --no-cache \
        chromium \
        nodejs \
        npm

COPY --chown=node:node package.json .

RUN npm install

COPY --chown=node:node src ./src

USER node

VOLUME ["/home/node/src"]

EXPOSE 9222

CMD ["node","src/index.js"]
