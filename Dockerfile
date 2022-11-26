FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

RUN yarn add --force react-i18next

RUN yarn add --force i18next

COPY . .

RUN yarn build

ENTRYPOINT ["yarn"]

EXPOSE 3003

CMD [ "yarn", "start" ]
