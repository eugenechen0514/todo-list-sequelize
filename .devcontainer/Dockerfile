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



# Install python/pip
RUN sudo apt-get install -y pip
RUN sudo ln -sf python3 /usr/bin/python
RUN sudo ln -sf pip3 /usr/bin/pip
RUN pip install virtualenv

# Install npm packages
RUN npm install -g nodemon

# aws cli
USER node
RUN sudo git clone https://github.com/aws/aws-elastic-beanstalk-cli-setup.git
RUN sudo mv aws-elastic-beanstalk-cli-setup /tmp/

RUN python /tmp/aws-elastic-beanstalk-cli-setup/scripts/ebcli_installer.py 
ENV PATH="${PATH}:/home/node/.ebcli-virtual-env/executables"
