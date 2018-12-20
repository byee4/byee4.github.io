# Installing SSHFS

# For Macs:

You should be able to double click the downloaded packages to run

## Install FUSE

[Latest as of 2018/12/19](https://github.com/osxfuse/osxfuse/releases/download/osxfuse-3.8.2/osxfuse-3.8.2.dmg)

## Install SSHFS

[Latest as of 2018/12/19](https://github.com/osxfuse/sshfs/releases/download/osxfuse-sshfs-2.5.0/sshfs-2.5.0.pkg)

# Using SSHFS

### Create a directory (or use an empty directory - has to be empty!)

```mkdir -p ~/sshfs/home```

### Mount a remote drive to your local empty directory

**```sshfs USERNAME@tscc-login1.sdsc.edu:/home/USERNAME ~/sshfs/home -o follow_symlinks```**

- Replace ```USERNAME``` with your TSCC login name. 
- Replace ```tscc-login1``` with ```tscc-login2``` if you prefer.
- The ```-o follow_symlinks``` will... follow symlinks within your mounted directory


##### (optional) Alias this command

Attach this command to something shorter so you don't have to remember the full command. Add this to your 
```~/.bash_profile```

For example, if my TSCC username is ```brianyee01``` and my local mount directory is ```/Users/brianyee/sshfs/home```, 
I could add the following line to my ```~/.bash_profile``` or ```~/.bashrc file``` so I can mount simply by typing ```sshfs_home```:

**```alias sshfs_home="sshfs brianyee01@tscc-login1.sdsc.edu:/home/brianyee01 /Users/brianyee/sshfs/home -o follow_symlinks"```**

"refresh" your bash profile/bashrc file to see changes:

**```source ~/.bash_profile```**

Navigate to the directory you created earlier, and you should be able to see your TSCC files!