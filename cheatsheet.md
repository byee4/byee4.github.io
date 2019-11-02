# References

- [0 vs 1-based cheatsheet on Biostars](https://www.biostars.org/p/84686/)

# Docker

- [Docker cheatsheet from dwilkie](https://gist.github.com/dwilkie/f8d6526edc5f1a8aca385df5113567e4)

# Markdown

- [Markdown cheatsheet by Adam Pritchard](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# Git

- [Github git cmd cheatsheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)

# Other useful commands

#### Remove all containers:
```bash
docker system prune -a -f
docker volume rm $(docker volume ls -qf dangling=true)
```

#### [Tag and push docker images](https://docs.docker.com/engine/reference/commandline/tag/):
```bash
docker tag 0e5574283393 fedora/httpd:version1.0
docker push fedora/httpd:version1.0
```


# R

#### Get hostname from within R shell
```bash
trimws(system("hostname -I", intern=TRUE))
```

#### Open a shiny app

```bash
runExample("01_hello", host = trimws(system("hostname -i", intern=TRUE)))
```

# Jupyter

### Running jupyter using TSCC IP
```bash
jupyter notebook --NotebookApp.ip=$(hostname --ip-address)
```

### Adding a kernel
```bash
python -m ipykernel install --user --name ENVNAME --display-name DISPLAYNAME
jupyter kernelspec uninstall unwanted-kernel
```
# Bash

### Finding a file in /home/brian/
```bash
find /home/brian/ -name "file"
```
### Find string in files within a directory
```bash
grep -rnw -e "string" directory
```
### Find files larger than X (100M) in /home/brian/
```bash
find /home/brian/ -size +100M -type f -print
```
# Singularity

### Build singularity image from docker
```bash
sudo singularity build 
```
### Create and convert a 2048MiB image and making it writable.
```bash
sudo singularity build --sandbox ubuntu ubuntu.simg # 
sudo singularity shell --writable ubuntu.img
```

### Installing additional packages from already built containers maintained by TSCC
```bash
singularity exec ubuntu.simg pip install --user networkx
```