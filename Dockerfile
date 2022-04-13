FROM node:16.9.0-alpine

WORKDIR /app

COPY index.js /app/index.js
COPY package.json /app/package.json

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]