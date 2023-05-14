ARG VARIANT=20
ARG PLATFORM=linux/amd64
FROM mcr.microsoft.com/devcontainers/javascript-node:0-${VARIANT}

# Install common packages
RUN apt-get update
RUN apt-get install -y git curl wget telnet vim

# Install other packages
# # Heroku CLI
# RUN curl https://cli-assets.heroku.com/install.sh | sh

# # MySQL Shell
# RUN wget -P /tmp https://repo.mysql.com/mysql-apt-config_0.8.25-1_all.deb
# RUN dpkg -i /tmp/mysql-apt-config_0.8.25-1_all.deb
# RUN apt-get update
# RUN apt-get install -y mysql-shell

# Install npm packages
RUN npm install -g nodemon
