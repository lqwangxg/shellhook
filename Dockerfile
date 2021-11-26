# FROM heroku/nodejs
FROM lqwangxg/node:latest 

VOLUME [ "/app" ]
WORKDIR /app

ONBUILD COPY package.json ./
ONBUILD RUN npm install 

COPY . .
CMD ["npm", "start"]
