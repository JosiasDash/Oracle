FROM node:latest

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Serve le dossier dist avec 'serve'
RUN npm install -g serve
CMD ["serve", "-s", "dist"]