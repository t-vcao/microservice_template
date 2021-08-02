FROM python:3.9-buster
COPY . /app
WORKDIR /app
RUN pip install flask flask_cors
RUN pip install requests
ENTRYPOINT ["python"]
CMD ["app.py"]
