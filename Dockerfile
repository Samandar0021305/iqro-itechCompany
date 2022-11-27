FROM node:18-alpine

WORKDIR /app

COPY package.json ./

COPY ./ ./

RUN npm i

RUN npm install --force i18next

RUN npm install --force react-i18next

ENV PORT 3003

EXPOSE 3003

CMD ["npm", "run","start"]
