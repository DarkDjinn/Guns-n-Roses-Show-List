FROM node:12
COPY . .
RUN npm i
WORKDIR /public/gnr
RUN npm i
WORKDIR /