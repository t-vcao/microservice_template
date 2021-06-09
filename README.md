# microservice_template

## Installation
```bash
dapr init
```


## WebApp
```bash
npm install
npm run buildclient
dapr run --app-id frontendapp --app-port 8080 --dapr-http-port 3500 node server.js
```

## IceCreamApp
```bash
dapr run --app-id iceapp --app-port 5000 --dapr-http-port 3501 flask run
```

## AccountApp
```bash
dapr run --app-id accapp --app-port 4000 --dapr-http-port 3502 flask run
```
