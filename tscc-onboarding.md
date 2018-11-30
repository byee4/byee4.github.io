# TSCC

TSCC_ houses our 640-core supercomputer as part of a condo resource sharing
system which allows other researchers (mostly bioinformaticians from the
Ideker, Ren, Zhang labs) to use our portion for their jobs (with an 8 hour
time limit) which allows us to use their portions when we need extra
computing power.

The main contacts for questions about TSCC are the `dry lab`_ and
`TSCC users`_ mailing lists. The main contact for problems with TSCC is `Eva Hocks`_ (tscc-support@sdsc.edu)

# Important rules

- 1. All sequencing data is stored in the ``/projects/ps-yeolab/seqdata`` folder unless otherwise specified.
- 2. The folder ``seqdata`` is intended as permanent storage and no folders or files there should ever be deleted
- 3. Do not process data in ``seqdata``. Use the directory structure described in `Organize your home directory`_ to create a ``scratch`` folder for all data processing.

# First Steps

Your first login session should include some of the following commands,
which will familiarize you with the cluster, teach you how to do some useful
tasks on the queue, and help you set up a common directory structure shared
by everyone in the lab.

# Log on!

First, log in to TSCC!

```ssh YOUR_TSCC_USERNAME@tscc-login2.sdsc.edu```

TSCC has two login nodes, ``login1`` and ``login2`` for load-balancing (i.e.
so if you just log on to ``tscc.sdsc.edu``, it'll choose whichever login
node is less occupied. We're logging in to a specific node because then
we'll always have our screen session on the same node) This is logging
specifically on to ``login2``. You can do ``login1`` if you like, as well,
to balance it out :)

# Start a screen session

NOTE - You can skip this on your initial setup, but you should come back and do this later because it is cool.

Screen_ is an awesome tool which allows you to have multiple "tabs" open in
the same login session, and you can easily transition between screens. Plus,
they're persistent, so you can leave something running in a screen session,
log out of TSCC, and it will still be running! Amazing! If you have
suggestions of things to add to this ``.screenrc``, feel free to make a pull
request on Olga's rcfiles_ github repo.

To get a nice status bar at the bottom of your terminal window, get this
``.screenrc`` file:

```
cd
wget https://raw.githubusercontent.com/olgabot/rcfiles/master/.screenrc
```

### Note:


The control letter is ``j``, not ``a`` in the documentation above,
so for example to create a new window, do ``Ctrl-j c`` and to kill the
current window, do ``Ctrl-j k``. Do ``Ctrl-j j`` to switch between
windows, and ``Ctrl-j #``, where # is some window number,
to switch to a numbered tab specifically (e.g. ``Ctrl-j 2`` to switch to
tab number 2.

This ``.screenrc`` adds a status bar at the bottom of your screen, like this:

![screen](https://github.com/byee4/byee4.github.io/blob/master/img/screen.png)

Now to start a screen session do:

```screen```

If you're re-logging in and you have an old screen session,
do this to "re-attach" the screen window.

```screen -x```

Every time you log in to TSCC, you'll want to reattach the screens from
before, so the first step I always take when I log in to TSCC is exactly
that, ``screen -x``.

# Add yeolab modules


- Modules are system-wide installations of programs and pipelines that are frequently used in the lab. 
However in order to access these modules, you'll need to specify the path to where they exist.

- Copy the ``.bash_modules`` file from my home to yours:
    
```cp /home/bay001/.bashrc_modules ~/```

- Add this line to the **end** of your ``~/.bashrc`` file (using either ``nano`` ``emacs`` or ``vi``/``vim``, your choice)

```source ~/.bashrc_modules```

- "source the ``.bashrc`` file to apply the above changes to your environment.
    variables we've created.

```source ~/.bashrc```

- Test that you can load and unload a module (typing ``module avail`` will list every module we have):

```
module load samtools
module list
module unload samtools
```
    
# Download and install anaconda

Download the Anaconda Python/R package manager using wget (web-get). The link below is from the Anaconda downloads page.

    ```wget https://repo.anaconda.com/archive/Anaconda2-5.3.1-Linux-x86_64.sh```
        
To install Anaconda, run the shell script with bash (this will take some time). It will ask you a bunch of questions, and use the defaults for them (press enter for all)

    ```bash Anaconda2-5.3.1-Linux-x86_64.sh```
    
To activate anaconda, source your .bashrc:

    ```source ~/.bashrc```
    
Make sure your Python is point to the Anaconda python with:

    ```which python```

The output should look something like:

    ```~/anaconda2/bin/python```


# Make a virtual environment on TSCC (optional)

WARNING - this is easy to get messed up. While this is a nice tool, it is not absolutely necessary upon initial setup and might be best to wait and configure environments after you have a better understanding of how they work.

On TSCC, the easiest way to create a virtual evironment (aka ``virtualenv``)
is by making one off of the ``base`` environment, which already has a bunch of
modules that we use all the time (``numpy``, ``scipy``, ``matplotlib``, ``pandas``, ``scikit-learn``, ``ipython``, the list goes on). Here's how you do it:


### Note:

The command ``$USER`` is meant to be literal, meaning you can exactly copy
the below command, and TSCC will create an environment with your username.
If you don't believe me, compare the output of:

    ```echo USER```

to the output of:

    ```echo $USER```

The second one should output your TSCC username, because the ``$`` dollar
sign indicates to the shell that you're asking for the variable ``$USER``,
not the literal word "USER".

```conda create --clone base --name $USER```

### Note:

You can also create an environment from scratch using ``conda`` to install
all the Anaconda Python packages, and then using ``pip`` in the environment
to install the remaining packages, like so:

    ```
    conda create --yes --name ENVIRONMENT_NAME pip numpy scipy cython matplotlib nose six scikit-learn ipython networkx pandas tornado statsmodels setuptools pytest pyzmq jinja2 pyyaml pymongo biopython markupsafe seaborn joblib semantic_version
    source activate ENVIRONMENT_NAME
    conda install --yes --channel https://conda.binstar.org/daler pybedtools
    conda install --yes --channel https://conda.binstar.org/kyleabeauchamp fastcluster
    pip install gspread brewer2mpl husl gffutils matplotlib-venn HTSeq misopy
    pip install https://github.com/YeoLab/clipper/tarball/master
    pip install https://github.com/YeoLab/gscripts/tarball/master
    pip install https://github.com/YeoLab/flotilla/tarball/master
    ```
These commands is how the ``base`` environment was created.

Then activate your environment with

    ```source activate $USER```

You'll probably stay in this environment all the time.


## Warning:

Make sure to add ``source activate $USER`` to your ``~/.bashrc`` file!
Then you will always be in your environment

If you need to switch to another environment, then exit your environment with:

    ```source deactivate```

# Add the location of ``GENOME`` to your ``~/.bashrc``

To run the analysis pipeline, you will need to specify where the genomes are
on TSCC, and you can do this by adding this line to your ``~/.bashrc``:



    GENOME=/projects/ps-yeolab/genomes

# Organize your home directory

Create an organized ``home`` directory structure following a common
template, so others can find your scripts, workflows,
and even final results/papers!  Do not store actual data in your home
directory as is is limited to 100 GB only.



# Link your scratch directory to your home

The "``scratch``" storage on TSCC is for temporary (after 90 days it gets
purged) storage. It's very useful for storing intermediate files,
and outputs from compute jobs because the data there is stored on
solid-state drives (SSDs, currently 300TB) which have incredibly fast
read-write speeds, which is perfect for outputs from alignment algorithms.
It can be annoying to go back and forth between your scratch directory,
so it's convenient to have a link to your scratch from home,
which you can make like this:

   ```ln -s /oasis/tscc/scratch/$USER $HOME/scratch```

### Note:

This is virtually unlimited temporary storage space,
designed for heavy I/O.  Aside from common reference files (e.g.
Genomes, GENCODE, etc.) this should be the only space that you can
read/write to from your scripts/workflows! The '''parallel''' throughput
of this storage is 100 GB/s (e.g. 10 tasks can each read/write at 10
GB/s at the same time)

### Warning:

Anything saved here is subject to deletion without warning after 3 months
or less of storage. In particular, the large ``.sam`` and ``.bam`` files
can get deleted, and you will have to re-run your analysis. Here are some tips for avoiding this:

- Keep your metadata sample/cell counts are in your ``$HOME/projects`` or
   ``/projects/ps-yeolab/$USER`` folder, which don't get purged
   periodically. For "t-cell" users, instead of ``/projects/ps-yeolab/$USER``, 
   your permanent storage will exist inside: ``/projects/ps-yeolab4/t_cell_p01_project/home/$USER``.
- Move important files to permanent storage (such as final BAM/BED/BIGWIG files, and QC metrics files) immediately
- Use this recursive touch command to "refresh" the decay clock on your
   files before important meetings and re-analysis steps:

        ```
        cd important_scratch_dir
        find . | xargs touch
        ```
            
# Create workflow and projects folders (optional)

Create ``~/workflows`` for your personal bash, makefile, queue, and so on,
scripts, and ``~/projects`` for your
projects to organize figures, notebooks, final results, and even manuscripts.

    ```mkdir ~/workflows ~/projects```

Here's an example project directory structure:

```
$ ls -lha /home/gpratt/projects/fox2_iclip/
total 9.5K
drwxr-xr-x  2 gpratt yeo-group  5 Sep 16  2013 .
drwxr-xr-x 40 gpratt yeo-group 40 Nov 24 12:20 ..
lrwxrwxrwx  1 gpratt yeo-group 49 Aug 21  2013 analysis -> /home/gpratt/scratch/projects/fox2_iclip/analysis
lrwxrwxrwx  1 gpratt yeo-group 45 Aug 21  2013 data -> /home/gpratt/scratch/projects/fox2_iclip/data
lrwxrwxrwx  1 gpratt yeo-group 50 Aug 21  2013 scripts -> /home/gpratt/processing_scripts/fox2_iclip/scripts
```

### Note:

Notice that all of these are soft-links to either ``~/scratch`` or some
other processing scripts.

# Let us see your stuff

Make everything readable by other yeo lab members and restrict access from
other users (per HIPAA/HITECH requirements)

    ```
    chmod -R g+r ~/
    chmod -R g+r ~/scratch/
    chmod -R o-rwx ~/
    chmod -R o-rwx ~/scratch/
    ```
    
But ``git`` will get mad at you if your ~/.ssh keys private keys are visible
by others, so make them visible to only you via:

    ```chmod -R go-rwx ~/.ssh/```

In the end, your '''home''' directory should look something like this:

    ```
    $ ls -l $HOME
    lrwxrwxrwx  1 bkakarad yeo-group    29 Jun 24  2013 scratch -> /oasis/tscc/scratch/bkakarad/
    drwxr-x---+ 2 bkakarad yeo-group     2 Jun 24  2013 gscripts
    drwxr-x---+ 3 bkakarad yeo-group     3 Jun 24  2013 projects
    drwxr-x---+ 2 bkakarad yeo-group     2 Jun 24  2013 workflows
    ```

# IPython notebooks on TSCC
-------------------------

This has two sections: Setup and Running. They should be done in order :)

## Setup IPython notebooks on TSCC

- First, on your personal computer,
   you will want to set up
   `passwordless ssh`_ from your laptop to TSCC. For reference, ``a@A`` is you from your laptop, and ``b@B`` is TSCC. So everywhere you see ``b@B``, replace that with ``yourusername@tscc.sdsc.edu``. For ``a@A``, since your laptop likely doesn't have a fixed IP address or a way to log in to it, you don't need to worry about replacing it. Instead, use ``a@A`` as a reference point for whether you should be doing the command from your laptop (``a@A``) or TSCC (``b@B``)

- To set up IPython notebooks on TSCC, you will want to add some ``alias``
   variables to your ``~/.bash_profile`` (for Mac) or ``~/.bashrc`` (for Linux)

    ```
    IPYNB_PORT=[some number above 1024]
    alias tscc='ssh obotvinnik@tscc-login2.sdsc.edu'
    ```


This way, I can just type ``tscc`` and log onto ``tscc-login2``
**specifically**. It is important for IPython notebooks that you always log
on to the same node. You can use ``tscc-login1`` instead, too,
this is just what I have set up. Just replace my login name
("``obotvinnik``") with yours.

- To activate all the commands you just added, on your laptop, type ``source ~/.bash_profile``. (``source`` is a command which will run all the lines in the file you gave it, i.e. here it will assign the variable ``IPYNB_PORT`` to the value you gave it, and run the ``alias`` command so you only have to type ``tscc`` to log in to TSCC)

- Next, type ``tscc`` and log on to the server.

- On TSCC, add these lines to your ``~/.bashrc`` file.

       ```
       IPYNB_PORT=same number as the above IPYNB_PORT from your laptop
       alias ipynb="ipython notebook --no-browser --port $IPYNB_PORT &"
       alias sshtscc="ssh -NR $IPYNB_PORT:localhost:$IPYNB_PORT tscc-login2 &"
       ```
       
   Notice that in ``sshtscc``, I use the same port as I logged in to,
   `tscc-login2`. The ampersands "`&`" at the end of the lines tell the computer
   to run these processes in the background, which is super useful.
   
- You'll need to run ``source ~/.bashrc`` again on TSCC, so the ``$IPYNB_PORT`` variable, and ``ipynb``, ``sshtscc`` aliases are available.

- Set up passwordless ssh between the compute nodes and TSCC with:

    ```cat .ssh/id_rsa.pub >> .ssh/authorized_keys```

- Back on your home laptop, edit your `~/.bash_profile` on macs,
   `~/.bashrc` for other unix machines to add the line:

       ```alias tunneltscc="ssh -NL $IPYNB_PORT\:localhost:$IPYNB_PORT obotvinnik@tscc-login2.sdsc.edu &"```

   Make sure to replace "``obotvinnik``" with your TSCC login :) It is
   also important that these are double-quotes and not single-quotes, because the double-quotes evaluate the ``$IPYNB_PORT`` to the number you chose, e.g. ``4000``, whereas the single-quotes will keep it as the letters ``$IPYNB_PORT``.

# Run IPython Notebooks on TSCC

Now that you have everything configured, you can run IPython notebooks on TSCC!
Here are the steps to follow.

- Log on to TSCC
- Now that you have those set up, start up a ``screen`` session, which allows you to have something running continuously, without being logged in.

    ```screen -x```

### Note:

If this gives you an error saying "There is no screen to be attached"
then you need to run plain old ``screen`` (no ``-x``) first.

If this gives you an error saying you need to pick one session, make
life easier for yourself and pick one to kill all the windows in,
(using ``Ctrl-j K`` if you're using the ``.screenrc`` that I recommended
earlier, otherwise the default is ``Ctrl-a K``). Once you've killed all
screen sessions except for one, you can run ``screen -x`` with abandon,
and it will connect you to the only one you have open.

- In this ``screen`` session, now request an interactive job, e.g.:

    ```qsub -I -l walltime=2:00:00 -q home-yeo -l nodes=1:ppn=2```

- Wait for the job to start.

- Run your TSCC-specific aliases on the compute node:

    ```ipynb sshtscc```

- **Back on your laptop**, now run your tunneling command:

    ```tunneltscc```

- Open up ``http://localhost:[YOUR IPYNB PORT]`` on your browser.


# Installing and upgrading Python packages

To install Python packages first try ``conda install``:

    ```conda install <package name>```

If there is no package in conda, then try `bioconda` (a google search for your package along with the keyword "bioconda" will tell you if this is available):

    
    ```conda install -c bioconda <package name>```


If there is no package in conda, then (and ONLY then) try `pip`:


    ```pip install <package name>```

To upgrade packages, do:

(using ``conda``)



    ```conda update <package name>```

(using ``pip``)



    ```pip install -U <package name>```

NOTE - you can see if your package is correctly installed in your anaconda with:



    ```which <package name>```
    
Alternatively, you can open python on your command line with:



    ```python```
    
And then try to import the package you just installed. If it doesn't throw an error, it installed successfully! 



    ```import <package name>```
    
To get out of python on your command line:



    ```quit()```
    

# Submitting and managing compute jobs on TSCC


## Submit jobs


To submit a script that you wrote, in this case called ``myscript.sh``,
to TSCC, do:



    qsub -q home-yeo -l nodes=1:ppn=2 -l walltime=0:30:00 myscript.sh

## Submit interactive jobs


To submit interactive jobs, do:



    qsub -I -q home-yeo -l nodes=1:ppn=2 -l walltime=0:30:00


## Submitting many jobs at once


If you have a bunch of commands you want to run at once,
you can use this script to submit them all at once. In the next example,
``commands.sh`` is a file has the commands you want on their own line,
i.e. one command per line.


```
java -Xms512m -Xmx512m -jar /home/yeo-lab/software/gatk/dist/Queue.jar \
-S ~/gscripts/qscripts/do_stuff.scala --input commands.sh -run -qsub \
-jobQueue <queue> -jobLimit <n> --ncores <n> --jobname <name> -startFromScratch
```

This runs a scala job that submits sub-jobs to the PBS queue under name you
fill in where <name> now sits as a placeholder.

## Check job status, aka "why is my job stuck?"

Check the status of your jobs (replace bay001 with your username):

    qstat -u bay001

``qstat -u bay001`` outputs,


```
(brian)[bay001@tscc-login2 ~]$ qstat -u bay001

tscc-mgr.sdsc.edu:
                                                                                  Req'd    Req'd       Elap
Job ID                  Username    Queue    Jobname          SessID  NDS   TSK   Memory   Time    S   Time
----------------------- ----------- -------- ---------------- ------ ----- ------ ------ --------- - ---------
2006527.tscc-mgr.local  bay001      home-yeo STDIN             35367     1     16    --   04:00:00 R  02:35:36
2007542.tscc-mgr.local  bay001      home-yeo STDIN              6168     1      1    --   08:00:00 R  00:28:08
2007621.tscc-mgr.local  bay001      home-yeo STDIN               --      1     16    --   04:00:00 Q       --
```

## Check job status of array jobs

Check the status of your array jobs, you need to specify ``-t`` to see the
status of the individual array pieces.



    ```qstat -t```


## Killing jobs


If you have a job you want to stop, kill it with ``qdel JOBID``, e.g.



    qdel 2006527

## Kill an array job


If the job is an array job, you'll need to add brackets, like this:



    qdel 2006527[]


## Kill all your jobs


To kill all the jobs that you've submitted, do:



    qdel $(qselect -u $USER)


## Which queue do I submit to? (check status of queues)


Check the status of the queue (so you know which queues to NOT submit to!). 
Generally, home-yeo queues move more quickly but we also have condo and hotel available 
to us should home-yeo queues be full.


    ```qstat -q```

Example output is,


    ```
    (olga)[obotvinnik@tscc-login2 ~]$ qstat -q

    server: tscc-mgr.local

    Queue            Memory CPU Time Walltime Node  Run Que Lm  State
    ---------------- ------ -------- -------- ----  --- --- --  -----
    home-dkeres        --      --       --      --    2   0 --   E R
    home-komunjer      --      --       --      --    0   0 --   E R
    home-ong           --      --       --      --    2   0 --   E R
    home-tg            --      --       --      --    0   0 --   E R
    home-yeo           --      --       --      --    3   1 --   E R
    home-visres        --      --       --      --    0   0 --   E R
    home-mccammon      --      --       --      --   15  29 --   E R
    home-scrm          --      --       --      --    1   0 --   E R
    hotel              --      --    168:00:0   --  232  26 --   E R
    home-k4zhang       --      --       --      --    0   0 --   E R
    home-kkey          --      --       --      --    0   0 --   E R
    home-kyang         --      --       --      --    2   1 --   E R
    home-jsebat        --      --       --      --    1   0 --   E R
    pdafm              --      --    72:00:00   --    1   0 --   E R
    condo              --      --    08:00:00   --   18   6 --   E R
    gpu-hotel          --      --    336:00:0   --    0   0 --   E R
    glean              --      --       --      --   24  75 --   E R
    gpu-condo          --      --    08:00:00   --   16  36 --   E R
    home-fpaesani      --      --       --      --    4   2 --   E R
    home-builder       --      --       --      --    0   0 --   E R
    home               --      --       --      --    0   0 --   E R
    home-mgilson       --      --       --      --    0   4 --   E R
    home-eallen        --      --       --      --    0   0 --   E R
                                                   ----- -----
                                                     321   180
    ```
    
So right now is not a good time to submit to the ``hotel`` queue,
since it has a bunch of both running and queued jobs!

