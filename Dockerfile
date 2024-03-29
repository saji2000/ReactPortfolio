FROM node:21-alpine

COPY package.json /app/ 
COPY src /app/
COPY public /app/

WORKDIR /app

RUN npm install   

CMD ["npm", "start"]

EXPOSE 3000