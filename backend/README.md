### Setup

1. Create a python virtual environment with `python -m venv path/to/venv`
    For example, `python -m venv ./venv` will create a directory called venv that will hold the environment

2. Switch to the newly created virtual environment with `source venv/bin/activate` (if on POSIX. See [here](https://docs.python.org/3/library/venv.html#how-venvs-work) for instructions on other OS)

3. Install the dependencies with `pip install -r requirements.txt`
    MAKE SURE YOU HAVE ENABLED THE VIRTUAL ENVIRONMENT BEFORE INSTALLING DEPENDENCIES


### Running the dev server

FastAPI recommends the use of uvicorn for development servers, so for now we will be using it.

``