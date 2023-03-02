## Device Agent Simulator
This package contains a device simulator. This simulator is part of the IoT Workflow Management and Execution. 
The role of the simulator in the solution is explained in the project [README](../README.md). The goal in this README is to understand how to build and run the simulator.

### Build and Run 
You have two options to run the simulator:
1. In Docker (the preferred way).
2. As a standalone NodeJs application.

This section will explain how to run the simulator in Docker. If you want to run in as a standalone application, it is assumed you have Node installed and are familiar with running Node applications.

To run this component in Docker, follow the following steps:

1. Share your AWS credentials with the container:
You can edit the ```env.list``` file  and add your AWS credentials AWS_ACCESS_KEY_ID=<your access key>, AWS_SECRET_ACCESS_KEY=<your secret key>, AWS_REGION=<your region>.
It is important that the AWS_REGION is also set, because the application will retrieve the IoT Endpoint using the region.
2. You can either run the ```run.sh``` file and run multiple containers, or build and start one container using Docker commands.  
a. To start one container, you can run:

```
docker build . -t device-agent-simulator-app
docker run --restart=unless-stopped -d -m "300M" -e alert=true --memory-swap "1G" -e "NODE_ENV=production" -u "node" --init --env-file ./env.list -it device-agent-simulator-app
```
b. To run more containers, you can use the ```run.sh``` script. It is by default configured to run 10 containers, but you can change based on your needs.

### Clean-Up:
1. After running the demo, make sure you remove all the created IoT things and certificates. 
2. You can use the following command to kill all the Docker containers.
```
docker kill $(docker ps -q)
```
3. Detach the principals and delete the IoT things:
For this, you can run the ```clean-up.js```. Make sure that you configured your AWS credentials, as well as region before running the script.