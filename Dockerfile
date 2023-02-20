FROM node:16.16.0-alpine 

WORKDIR /app
COPY ./package.json ./
COPY ./public ./public/
COPY ./views ./views/
COPY ./app.js ./
COPY ./.env ./

RUN npm install --omit=dev
RUN tar -cvzf app.tar.gz /app

EXPOSE 3000

CMD ["node", "app.js"]