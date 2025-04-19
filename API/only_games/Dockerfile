FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 4012
CMD [ "node", "src/index.js" ]