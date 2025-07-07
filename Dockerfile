FROM node:22-alpine AS builder

RUN apk add --no-cache curl && \
    npm config set registry https://registry.npmjs.org/ && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000

WORKDIR /app

COPY package*.json ./

RUN echo "Installing dependencies..." && \
    npm ci --prefer-offline --no-audit

COPY . .
RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["node", "dist/index.js"]