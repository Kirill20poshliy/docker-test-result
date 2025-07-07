FROM node:alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com && \
    npm ci

COPY . .

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["node", "dist/index.js"]