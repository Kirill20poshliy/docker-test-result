FROM node:22-bullseye-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .
RUN npm run build

FROM node:22-bullseye-slim

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["node", "dist/index.js"]