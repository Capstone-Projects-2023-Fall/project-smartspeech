# Python 3
FROM python:3.9

# Set base dir
WORKDIR /code

# Copy dependency list
COPY ./requirements.txt /code/requirements.txt

# Install dependencies
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy application code
COPY ./src /code/src

# Start server
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "80"]
