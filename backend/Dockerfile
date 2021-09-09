FROM node:16.8.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ARG API_KEY
ENV API_KEY $API_KEY

EXPOSE 9000
CMD [ "npm", "start" ]
