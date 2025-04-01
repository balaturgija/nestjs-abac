FROM node:lts-slim AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:lts-alpine AS nestjs-abac
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
CMD [ "node", "dist/main.js" ]
