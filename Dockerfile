FROM mhart/alpine-node:base-6

WORKDIR /api
ADD . .

RUN apk add --no-cache make gcc g++ python 

EXPOSE 3000

CMD ["node", "api/index.js"]
