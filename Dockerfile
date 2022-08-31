FROM node:16-alpine
WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn

COPY . .
RUN yarn prisma generate

EXPOSE 3131

CMD [ "yarn", "migrate" ]