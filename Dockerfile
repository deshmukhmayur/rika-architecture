FROM node:14-alpine

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent

COPY . .

EXPOSE 8080 3001

CMD ["npm", "start"]
