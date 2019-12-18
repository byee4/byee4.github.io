# Running Matlab from TSCC:

## Make sure you are a part of 'matlab-users' 
- (ie. groups $USER). If you don't see 'matlab-users' you will not have the necessary license credentials and will not be able to run Matlab!

## Get an interactive node
- you probably only need 1-2 processors per node (```qsub -I -q home-yeo -l nodes=1:ppn=1 -l walltime=8:00:00```). 
- Keep this window open and note the node that you got. It should be something like "```tscc-1-54```".

![ssh](http://byee4.github.io/img/ssh.png)

## On your local machine, install [xquartz](https://www.xquartz.org/) 
- Make sure it's running (it's an application you should be able to click on. Otherwise, you can open a terminal window and type "xquartz" to run the program)

## Open an xquartz terminal and ssh into your interactive node
- Use with special flags that indicate X11 forwarding (ie. ssh -X -Y bay001@tscc-1-54.sdsc.edu)

![ssh](http://byee4.github.io/img/sshxy.png)

![xquartz](http://byee4.github.io/img/xquartz.png)

## Once you're in, load matlab and run it:

```
module load matlab
matlab
```

![matlab](http://byee4.github.io/img/matlab.png)