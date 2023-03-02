#!/bin/bash
docker build . -t device-agent-simulator-app
for i in {1..10}
do
   docker run --restart=unless-stopped -d -m "300M" -e alert=true --memory-swap "1G" -e "NODE_ENV=production" -u "node" --init --env-file ./env.list -it device-agent-simulator-app
   sleep 1
done
