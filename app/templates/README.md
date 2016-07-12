# NodeJS RESTful API <%= microservice %> Microservice
This repository contains a full configuration that runs NodeJS RESTful API <%= app %> Microservice.

[![Build Status](https://secure.travis-ci.org/<%= username %>/<%= app %>.png?branch=master)](https://travis-ci.org/<%= username %>/<%= app %>)
[![Coverage Status](https://coveralls.io/repos/github/<%= username %>/<%= app %>/badge.svg?branch=master)](https://coveralls.io/github/<%= username %>/<%= app %>?branch=master)
[![Dependency Status](https://img.shields.io/david/<%= username %>/<%= app %>.svg)](https://david-dm.org/<%= username %>/<%= app %>)
[![Dev-Dependency Status](https://img.shields.io/david/dev/<%= username %>/<%= app %>.svg)](https://david-dm.org/<%= username %>/<%= app %>#info=devDependencies)

## Requirements

* [MongoDB](https://www.mongodb.com/download-center "MongoDB")
* [NodeJS](https://nodejs.org/en/download "NodeJS")<% if (docker) { %>
* [Docker](https://www.docker.com/products/docker "Docker")<% } %>

## Build for local development

You have to use the following command to start a development server:

```sh
npm run dev
```

See `package.json` for more details.

## Build for staging and production environments

Use following command to build project:

```sh
npm run build
```

Use following command to start project on staging and production environments:

```sh
npm start
```

See `package.json` for more details.

## Tests

Following tests libraries are used for unit/integration tests:
* [MochaJS](https://mochajs.org "MochaJS")
* [SinonJS](http://sinonjs.org "SinonJS")
* [ChaiJS](http://chaijs.com/ "ChaiJS")

Tests are kept next to source with following pattern *.spec.js

Use following command to run tests:

```sh
npm test
```

Use following command to run tests coverage:

```sh
npm run coverage
```

<% if (docker) { %>## Docker container

There is available Docker container and Docker Composer if you would like to run many NodeJS Microservices.

Build API Microservice by using following command:

```sh
npm run build
```

Then use following command to build Docker containers:

```sh
docker-compose up -d --build
```

See `Dockerfile` and `docker-compose.yml` for more details.<% } %>

<% if (heroku) { %>## Deployment

### Heroku

* Build Microservice by using following command `npm run build`
* Go to builded directory *dist*
* Download and install [Heroku Toolbelt](https://toolbelt.heroku.com/ "Heroku Toolbelt")
* Log in to Heroku by using following command `heroku login`
* Run following command `heroku create`
* Run following command `heroku addons:create mongolab` to add MongoDB to your application.
* Run following command `git push heroku master` to push your application to Heroku.<% } %>
