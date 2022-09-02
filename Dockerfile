FROM node:15.10.0-slim
COPY . ./demo
WORKDIR /demo
RUN npm install pnpm -g
RUN pnpm i
CMD npm run dev
