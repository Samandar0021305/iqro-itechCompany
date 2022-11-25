FROM 16-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

RUN yarn add --force react-i18next

RUN yarn add --force i18next

COPY . .

RUN yarn build

EXPOSE 3003

ENTRYPOINT ["yarn"]

CMD ["serve"]
