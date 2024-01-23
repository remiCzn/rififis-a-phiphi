FROM node:18-alpine3.18 as build-stage

WORKDIR /app/server
COPY server/package*.json ./
COPY common/ /app/common/
RUN npm install
RUN npm install -g typescript
COPY server/ .
RUN npm run build

FROM node:18-alpine3.18 as production-stage
RUN mkdir /app
COPY server/package.json ./
RUN npm i --only=production
COPY --from=build-stage /app/server/dist /app
CMD [ "node", "/app/index.js" ]
