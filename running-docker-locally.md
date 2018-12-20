# Docker

Docker is a container system. You can think of Docker as a platform that allows you to run stuff with 
minimal installation or dependency issues. 

# Important things to note

- This pages shows how to install and run analyses **locally**, meaning your own computer 
needs to be able to handle the analysis

# Installing Docker

[Install Docker for Mac](https://docs.docker.com/docker-for-mac/install/)

Double click the Docker icon to start. It may ask you to sign in, which is optional unless you're 
building/saving images on Dockerhub, which is a repository that stores Dockerfiles. 

You can probably use this as a general cheatsheet to install and run any docker container, 
but as motivation for this page, I was looking to run an R package (monocle), and R packages 
sometimes aren't the most straightforward to install. 

# Search for your package

I googled ' docker monocle' and found a 
[github repository](https://github.com/Stuartlab-UCSC/monocle-docker) 
from the [Stuart lab](https://jstuart.soe.ucsc.edu/) which has not only provided the Dockerfile, 
but also wrote some nice instructions to install/onboard the image. I'll explicitly write these steps 
down below for new Docker users (like me):

## Verify docker installation

First let's verify that installation worked by typing: 

```docker```

Which should provide some of the most useful Docker commands. These include:
- docker pull 
- docker build
- docker run
- docker images
- docker ps

## (Option 1): Pull a docker image from dockerhub 

For example, there is a link to the Stuart Lab-maintained repository 
on Dockerhub, which will exist for any hosted repository: [stuartlab/monocle](stuartlab/monocle)

To the right, you should see a "Docker Pull Command":

```docker pull stuartlab/monocle```

This is the same as:

```docker pull stuartlab/monocle:latest```


Which will pull the latest release. Alternatively, you should be able to substitute ```:latest``` 
with any other tag/version (usually listed in the Dockerhub repo).

Typing and running this command will pull all of the layers of software required and 
build a monocle image based on the instructions provided from the Dockerfile. 

![docker-pull-1](http://byee4.github.io/img/docker-pull-example-1.png)

##### (Option 2): Build a docker image from a Dockerfile

Alternatively, you can build an image directly from a Dockerfile itself, 
from the directory where the Dockerfile lives. 
(but I'd recommend Option 1):

```
git clone https://github.com/Stuartlab-UCSC/monocle-docker
cd monocle-docker
docker build .
```

Whether through (1) or (2), upon success, you should be able to see the image built by typing: 
```docker images```

**Make note of the image ID**

![docker-images-1](http://byee4.github.io/img/docker-images-example-1.png)

In this case, the image ID corresponding to our monocle container is ```f9e6a444bfc8```. I built this 
image from a Dockerfile, so it has no tag info, but if you built through Dockerhub, it will usually 
list a tag corresponding to the repo/version built.

## Create a directory

Docker containers usually run independently, which means your standard filesystem will not be available. 
We'll need to create/define a directory to mount/connect to the container, so that when you save stuff, it will 
persist after your container is destroyed. 

```mkdir ~/Documents/monocle-data```

#### (Optional) Install sshfs

With sshfs, you can mount your TSCC drive to a local directory. Instead of creating a local directory,
you can then mount that mounted directory onto your Docker container, essentially creating a bridge 
between files on TSCC and files inside your Docker container.

```(tscc) /home/bay001 -> (local) /Users/brian/bay001/ -> (docker) /home/rstudio/ ```

## Creating and running your container

Once you have a directory and an image, you can now create a container. In addition to Monocle, 
this image also had instructions to install [RStudio](https://www.rstudio.com/), which is a nice interface for R, but 
requires a username/password (pre-defined initially as rstudio/rstudio, although you'll have to 
create a new password). This information usually gets destroyed when your container gets destroyed, 
so just create any new password at the start that you can use every time you run the same container. 

RStudio also requires port information - you may keep this at **8787** or change to another, it doesn't 
matter. What's important is the image name (**f9e6a444bfc8**) that you can see from typing ```docker images```
and the mount point:destination (-v): ```-v ~/Documents/monocle-data:/home/rstudio/```

```docker run -v ~/Documents/monocle-data:/home/rstudio/ -e PASSWORD=password -p 8787:8787 f9e6a444bfc8```

## Run RStudio (and monocle)

Now you should be able to open a web browser and login to RStudio using the port defined above:

```localhost:8787```

![docker-rstudio-1](http://byee4.github.io/img/rstudio-example-2.png)

Try running ```library('monocle')``` in RStudio!

## Loading/saving files

You can load/save files, including any Rscripts on the mounted directory defined earlier. 

## Listing all containers 

Since you can technically run multiple containers at once, sometimes it's useful to list all containers 
running (or stopped):

```docker ps -a```

```-a``` is used to list all containers, whether it's running or not. ```docker ps``` will just list running containers.

You probably only need one running container; if you need more than that, you probably shouldn't be reading this tutorial

## Stopping/starting a container

To stop a running container, you can either press ```Ctrl+C``` in the same window you launched the container 
from, or by typing ```docker stop <container ID>``` where ```<container ID>``` can be found using ```docker ps -a```

To start a stopped container, you can type ```docker start <container ID>```

# Other useful commands

```docker images``` - list all images

```docker rmi <image_id>``` - remove an image

# References/quick links

- [Trapnell lab](http://cole-trapnell-lab.github.io/)
- [Stuart lab](https://jstuart.soe.ucsc.edu/)
- [Monocle Dockerhub](https://hub.docker.com/r/stuartlab/monocle/)
- [Monocle tutorial](http://cole-trapnell-lab.github.io/monocle-release/docs/#recommended-analysis-protocol)
