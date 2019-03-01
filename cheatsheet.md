# Docker

- [Nice cheatsheet from dwilkie](https://gist.github.com/dwilkie/f8d6526edc5f1a8aca385df5113567e4)

# Other useful commands

#### Shell into docker image:
```
docker run -i -t <IMAGE_NAME> /bin/bash
```
#### Remove all containers:
```Uli Köhler
docker rm $(docker ps -a -q)
```
#### Remove all images:
```Uli Köhler
docker rmi $(docker images -q)
```
#### If the above isn't good enough
```
docker system prune -a -f
docker volume rm $(docker volume ls -qf dangling=true)
```
# R

#### Get hostname from within R shell
```
trimws(system("hostname -I", intern=TRUE))
```

#### Open a shiny app

```
runExample("01_hello", host = trimws(system("hostname -i", intern=TRUE)))
```

# Jupyter
```
jupyter notebook --NotebookApp.ip=$(hostname --ip-address)
```

# Jupyter kernel commands
```
python -m ipykernel install --user --name ENVNAME --display-name DISPLAYNAME
jupyter kernelspec uninstall unwanted-kernel
```
# bash
```
grep -rnw -e "string" directory
```
