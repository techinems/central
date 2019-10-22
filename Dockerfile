FROM node:12-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install -g @angular/cli
RUN npm install
RUN ng build --aot --prod

EXPOSE 3000

CMD ["node", "server"]
