# FROM heroku/nodejs
FROM lqwangxg/node:latest 

VOLUME [ "/app" ]
WORKDIR /app

#COPY package.json ./
#RUN npm install
COPY . .

CMD ["/bin/sh","./start.sh"]