FROM node:16.14-alpine

WORKDIR /app

COPY package* ./

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build
RUN npm run swagger-autogen

CMD ["npm", "start"]