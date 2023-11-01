### Setup

1. Create a python virtual environment with `python -m venv path/to/venv`
   For example, `python -m venv ./venv` will create a directory called venv that will hold the environment

2. Switch to the newly created virtual environment with `source venv/bin/activate` (if on POSIX. See [here](https://docs.python.org/3/library/venv.html#how-venvs-work) for instructions on other OS)

3. Install the dependencies with `pip install -r requirements.txt`
   MAKE SURE YOU HAVE ENABLED THE VIRTUAL ENVIRONMENT BEFORE INSTALLING DEPENDENCIES

### Install Deps

```shell
pip install -r requirements.txt
```

From the `/backend` you can run the above command to install all dependencies.

### Running the dev server

FastAPI recommends the use of uvicorn for development servers, so for now we will be using it.

`uvicorn src.main:app --reload --env-file ./src/.env.local` will run the development server locally.

#### Docker

Setting up the docker requires a few steps.

First, if the docker daemon is not running, open a new terminal and run `dockerd`. This will run the docker application so that you can use commands like `docker build` or `docker run`.

Next, we have to build the image that we will be running. The command `docker build path -t myimage:version` will build the image with the name 'myimage' and version 'version' from the Dockerfile in the folder at path (for example testing:0.1.0).

Now that we have an image, we have to run the image with the command `docker run --name mycontainer -p 80:8000 myimage`. This creates and runs a container named 'mycontainer' based off the image 'myimage', mapping the external port 80 to port 8000 inside the container.

To access the app, go to 'http://127.0.0.1', and you should see the hello world message. The reason the terminal output says "Uvicorn running on http://0.0.0.0:8000" Is because that is the internal address- the external access is docker's default host, which is 127.0.0.1.

A super cool feature of FastAPI is their automatic documentation, accessed at http://127.0.0.1/docs.
