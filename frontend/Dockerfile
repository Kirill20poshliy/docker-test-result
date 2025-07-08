FROM node:alpine

WORKDIR /usr/app/frontend

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# FROM node:alpine AS builder

# WORKDIR /usr/app/frontend

# COPY package*.json /usr/app/frontend

# RUN npm install

# COPY . /usr/app/frontend

# RUN npm run build

# FROM nginx:alpine

# COPY --from=builder /usr/app/frontend/dist /usr/share/nginx/html