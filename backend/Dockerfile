FROM node:alpine AS builder

WORKDIR /usr/app/backend

COPY package*.json ./

RUN npm ci

COPY . /usr/app/backend
RUN npm run build

FROM node:alpine

WORKDIR /usr/app/backend

COPY --from=builder /usr/app/backend .

EXPOSE 3000

CMD ["node", "dist/index.js"]