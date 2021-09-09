FROM node:16.8.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL $REACT_APP_BACKEND_URL

EXPOSE 3000
CMD [ "npm", "start" ]
