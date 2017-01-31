# file-uploader


## Setup

```
npm install
```


Copy all config

```
cp config_example.js config.js
```

```
cp server/config_example.json server/config.json
```

Replace the values with your custom values


#### Model Migrations

```
node_modules/.bin/sequelize db:migrate
```


## Run

```
nodemon
```


## [Postman Api Collection](1) for easy usage


Sample Model Creation
 
```
node_modules/.bin/sequelize model:create --name member --attributes "first_name:string,last_name:string,email:string,phone:string,password:string"
```


[1] : https://www.getpostman.com/collections/99968cec44dad662f97f
