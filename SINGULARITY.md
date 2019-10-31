# CRED_portal_tools
Repository containing Dockerfiles and Singularityfiles for tools that I've wrapped/deployed.

Software packages (ie. Seurat) for more exploratory analysis are available for download to minimize 
installation dependency conflicts across platforms. Many of these images have been deployed with Jupyter and 
the corresponding kernel, which users can develop Jupyter notebooks containing code. 

# Basic instructions for running Singularity executables:

1. Install [Singularity](https://sylabs.io/guides/2.5/user-guide/installation.html). For Mac & Windows operating systems, it 
is recommended that you install Singularity via [Vagrant](https://www.vagrantup.com/intro/index.html). There is a minimal 
set of instructions on Singularity's installation page:

    Install Vagrant with brew:
    ```bash
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    
    brew cask install virtualbox

    brew cask install vagrant
    
    brew cask install vagrant-manager
    ```
    
    Install Singularity **(Note the following changes you may need to make to the default Vagrantfile in order to run Jupyter)**:
    ```bash
    # make a working directory and cd:
    mkdir singularity-vm
    cd singularity-vm
    
    # make a data file to mount files:
    mkdir vadata
    
    # Destroy any previous version:
    vagrant destroy
    
    # Bring up VM:
    vagrant init singularityware/singularity-2.4
    ```
    
    *In Vagrantfile:*
    
    ```bash
    # add the following lines:
    
    Vagrant.configure("2") do |config|
      config.vm.network "forwarded_port", guest: 8888, host: 8888
    end
    
    # Note: synced folders must be absolute!
    config.vm.synced_folder "data", "/vagrant_data" 
    config.vm.network "private_network", ip: "192.168.33.10"
    ```
    Back in your terminal
    ```bash
    vagrant up
    vagrant ssh
    
    # Test
    singularity --version
    
    ```

2. Download the singularity image **or** use the Singularityfile from this repository to build an image:

    ```bash
    # Your vagrant_data/ folder should be mounted in the root directory:
    cd /vagrant_data/
    
    wget https://s3-us-west-1.amazonaws.com/u19/home/share/tools/garnett-0.1.3.img
    ```
    
3. Run Jupyter from within the image:

    ```bash
    vagrant@vagrant:/vagrant_data$ singularity exec garnett-0.1.3.img jupyter notebook --ip="0.0.0.0"
    [I 20:54:40.155 NotebookApp] Serving notebooks from local directory: /home/vagrant
    [I 20:54:40.156 NotebookApp] The Jupyter Notebook is running at:
    [I 20:54:40.157 NotebookApp] http://(vagrant or 127.0.0.1):8888/?token=28ca7c550ae212b69ea30c70409e230d959cb48bc328785f
    [I 20:54:40.157 NotebookApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
    [W 20:54:40.161 NotebookApp] No web browser found: could not locate runnable browser.
    [C 20:54:40.162 NotebookApp] 
        
    To access the notebook, open this file in a browser:
        file:///home/vagrant/.local/share/jupyter/runtime/nbserver-2114-open.html
    Or copy and paste one of these URLs:
        http://(vagrant or 127.0.0.1):8888/?token=28ca7c550ae212b69ea30c70409e230d959cb48bc328785f

    ```
    
