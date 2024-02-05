# # Stage 1 - Install dependencies
# FROM node:19-alpine as install
# WORKDIR /usr/src/app
# COPY package.json .
# RUN npm install

# # Stage 2 - Start application
# FROM node:19-alpine as start
# WORKDIR /usr/src/app
# RUN apk update && apk add bash
# # COPY --from=install /usr/src/app/package.json .
# COPY package.json .
# COPY wait-for-it.sh .
# RUN chmod +x /usr/src/app/wait-for-it.sh
# COPY src ./src
# COPY --from=install /usr/src/app/node_modules ./node_modules
# EXPOSE 3000


FROM node:18

WORKDIR /application
COPY package.json .
RUN npm install

EXPOSE 3000

COPY . .
CMD npm start