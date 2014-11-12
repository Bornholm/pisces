FROM dockerfile/nodejs
MAINTAINER William Petit "william.petit@ptitcloud.fr"

VOLUME /home/node/app

RUN npm install -g bower nodemon

RUN useradd -s /bin/bash node

RUN chown -R node: /home/node

USER node
ENV HOME /home/node

WORKDIR /home/node/app

#ENV NODE_ENV production

EXPOSE 8888

CMD ["nodemon", "index.js"]
