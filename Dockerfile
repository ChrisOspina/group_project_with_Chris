FROM node:17-alpine as builder
WORKDIR /group_project_with_Chris-master 
COPY package.json .
RUN npm install
COPY . .
CMD [ "npm","start" ]