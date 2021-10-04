FROM node:lts-alpine

RUN apk --no-cache add git

WORKDIR /var/www/app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "build", "&&", "npm", "run", "start" ]