#!/bin/bash

# user credentials are written into a .gitignored file
# server.js writes these credentials to header when issuing requests to Cloudflare API

echo "1) Store Auth Headers in ENV for server use"
echo  -n X-Auth-Email: 
read email
echo
echo -n X-Auth-Key: 
read -s key
echo

export xAuthEmail=$email
export xAuthKey=$key

echo "2) npm install && webpack"
npm install && webpack
echo "3) start node server.js "
node server.js
