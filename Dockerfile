FROM node:12.17

WORKDIR /home/app

COPY . ./

RUN yarn

EXPOSE 4000

CMD ["npm", "start"]
