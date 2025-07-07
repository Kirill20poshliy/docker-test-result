FROM node:alpine

WORKDIR /usr/app/backend

EXPOSE 3000

COPY ./ /usr/app/backend

RUN npm ci && npm run build

CMD ["node", "dist/index.js"]