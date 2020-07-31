# Readme

This is a base structure for a node microservice involving database fetching and operations.
The base comes with following functionality

- Controller Routing

- Database Generation

- Environment Configuration

- Constants usage

- API Validator MiddleWare

## Getting Started

Make sure the following requirements are installed.

### Requirements

- Nodejs
- Mysql server

## Building the project

clone the repo and use

```Terminal
npm install
```

## Running

Before running, the project requires a config/config.json and .env file. use config/example.config.json to create config/config.json and example.env to create .env file

To run in development environment with nodemon

```Terminal
npm run dev
```

To start with one of the configured env from config/config.json

```Terminal
npm run start -- --NODE_ENV=<environment_name>
```

You can pass more parameters but make sure you use double hiphen after start, the syntax is

```Terminal
npm run start -- --paramter1=parameterValue --parameter2=parameterValue
```

Also Make sure there is no sapce around '='

### Database Creation

To create database in production env

```Terminal
npm run createDatabase -- --NODE_ENV=production
```

To force create database tables, not this doesn't drops database if it exists, it drops and creates new tables from database.json

```Terminal
npm run createDatabase -- --NODE_ENV=production --force
```

The script needs model definitions. To update database, add model definition in models folder and update database.json to include the location of the models added.

Incase you get mysql authentication protocol error, try the following command in your mysql-logged in terminal

```Mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
```

## Config for environments

config/config.json has the relevent environment values for different environment
If you are missing config.json file, use example.config.json file to create your own config.json used to specify environment parameters
Place config.json inside config folder

.env file is also needed for secrets, use example.env to create a .env file for the surver placed in root folder of the server

## Route

The route directory handles the routing from app.js

This project was generated using express generator.
