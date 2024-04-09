FROM node:20.11.1

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


EXPOSE 4000

CMD ["npm", "run", "dev"] 
# command should be in proper order otherwise the docker won't run like if we did==> CMD["dev", "npm","npm"]
