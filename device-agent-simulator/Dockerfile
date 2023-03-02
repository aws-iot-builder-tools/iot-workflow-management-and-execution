FROM node:16-slim
RUN apt-get update && apt-get install -y zip bash curl

WORKDIR /
COPY --chown=node:node package.json src ./
RUN npm install --production
USER node
CMD ["node",  "simulator-main.js"]

