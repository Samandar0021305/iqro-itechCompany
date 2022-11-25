FROM node:16.7-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3003

ENTRYPOINT ["yarn"]

CMD ["serve"]
