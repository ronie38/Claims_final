FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm -g install

RUN npm install react-scripts


COPY . .

EXPOSE 3000

CMD ["npm","start"]