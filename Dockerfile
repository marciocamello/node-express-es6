#########################################################################
# OS Settings
#########################################################################

# specify the node base image with your desired version node:<version>
FROM node:8

# non interactive comands
ARG DEBIAN_FRONTEND=noninteractive

# update and upgrade system
RUN apt-get update && apt-get install -y --no-install-recommends \
    apt-utils \
 && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    apt-transport-https \
    dialog

RUN apt-get upgrade -y

# install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

#########################################################################
# Aplication settings
#########################################################################

# node settings
ENV NODE_ENV staging

# home path
ENV APP_DIR=/home/node/app

# work directory
WORKDIR $APP_DIR

# volumes
VOLUME [ "/${APP_DIR}" ]

# ports
EXPOSE 3000:3000

# install node modules
RUN cd $APP_DIR && yarn && ls

# install pm2 to global runner
RUN yarn global add pm2

# setting pm2
RUN pm2 update
RUN pm2 startup upstart

# application start
RUN cd $APP_DIR
ENTRYPOINT yarn start

