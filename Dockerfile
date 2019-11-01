FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install yarn -g && \
    yarn global add node-sass && \
    yarn

COPY . .

EXPOSE ${API_PORT}

CMD ["npm", "start"]
