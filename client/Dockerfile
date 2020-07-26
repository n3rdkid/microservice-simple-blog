FROM node:latest
WORKDIR /app
COPY ./package.json ./
RUN npm install
ENV CI=true
COPY ./ ./
CMD ["npm","start"]