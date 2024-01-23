FROM node:18-alpine3.18 as build-stage

WORKDIR /app/frontend
COPY frontend/package*.json ./
COPY common/ /app/common/
RUN npm install
COPY frontend/ .
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY ./frontend/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/frontend/dist /usr/share/nginx/html