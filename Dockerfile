FROM node:boron

WORKDIR .

COPY package.json .
RUN npm install
COPY . .

EXPOSE 5000
CMD [ "npm", "start" ]
