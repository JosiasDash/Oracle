FROM node:latest
COPY . /app
WORKDIR /app
RUN npm install && npm install serve && npm run build
CMD [ "serve", "dist" ]