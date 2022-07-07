FROM node:18-alpine
RUN mkdir -p /usr/src/app
RUN apk add --update bash && rm -rf /var/cache/apk/*
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
#CMD [ "npm", "start" ]
#CMD ["npm", "run", "dev"]
CMD ["npm", "run", "dev1"]