FROM node:17-alpine
WORKDIR /app
COPY ${PWD}/package.json ./
RUN npm i
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["sh", "-c", "npm run typeorm:run-migrations && npm run start:prod"]