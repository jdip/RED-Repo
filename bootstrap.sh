#!/usr/bin/env bash

ln -fs /usr/bin/vi /usr/bin/vim

export DEBIAN_FRONTEND=noninteractive

apt-get update
apt-get upgrade -y -q

echo "US/Eastern" | tee /etc/timezone
dpkg-reconfigure --frontend noninteractive tzdata


apt-get install -y -q build-essential
apt-get install -y -q ruby-full zlib1g-dev

# RUN FOLLOWING AFTER SETUP

#echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
#echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
#echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
#source ~/.bashrc
#gem install jekyll bundler