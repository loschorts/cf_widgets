#!/bin/bash

# user credentials are written into a .gitignored file
# server.js writes these credentials to header when issuing requests to Cloudflare API

echo  -n X-Auth-Email: 
read email
echo
echo -n X-Auth-Key: 
read -s key
echo

export xAuthEmail=$email
export xAuthKey=$key

node server.js