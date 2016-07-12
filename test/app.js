'use strict';
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('generator-nodejs-microservice-starter:app', function () {
  const commonFiles = [
    'README.md',
    'package.json',
    'LICENSE',
    '.travis.yml',
    '.jshintrc',
    '.gitignore',
    '.editorconfig',
    '.babelrc',
    'server/index.js',
    'server/config/app.conf.js',
    'server/config/db.conf.js',
    'server/config/db.conf.test.js',
    'server/config/index.js',
    'server/config/routes.conf.js',
    'server/api/service/index.js',
    'server/api/service/index.spec.js',
    'server/api/service/service.controller.js',
    'server/api/service/service.controller.spec.js',
    'server/api/service/service.dao.js',
    'server/api/service/service.dao.spec.js',
    'server/api/service/service.model.js'
  ];

  const dockerFiles = [
    'Dockerfile',
    'docker-compose.yml',
    'nginx/Dockerfile',
    'nginx/nginx.conf'
  ];

  const herokuFiles = [
    'Procfile'
  ];

  describe('default', function () {

    before(function () {
      helpers.run(path.join(__dirname, '../app'))
        .withPrompts({
          username: "Abdizriel",
          email: "kontakt@marcinmrotek.pl",
          microservice: "Node",
          docker: false,
          heroku: false
        })
        .withOptions({ 'skip-install': true })
        .toPromise();
    });

    it('should create just default files', function () {
      assert.file(commonFiles);
      assert.noFile(dockerFiles);
      assert.noFile(herokuFiles);
    });

  });

  describe('default with Docker', function () {

    before(function () {
      helpers.run(path.join(__dirname, '../app'))
        .withPrompts({
          microservice: "Node",
          username: "Abdizriel",
          email: "kontakt@marcinmrotek.pl",
          docker: true,
          heroku: false
        })
        .withOptions({ 'skip-install': true })
        .toPromise();
    });

    it('should create default and docker files', function () {
      assert.file(commonFiles);
      assert.file(dockerFiles);
      assert.noFile(herokuFiles);
    });

  });

  describe('default with Heroku', function () {

    before(function () {
      helpers.run(path.join(__dirname, '../app'))
        .withPrompts({
          microservice: "Node",
          username: "Abdizriel",
          email: "kontakt@marcinmrotek.pl",
          docker: false,
          heroku: true
        })
        .withOptions({ 'skip-install': true })
        .toPromise();
    });

    it('should create default and Heroku files', function () {
      assert.file(commonFiles);
      assert.file(herokuFiles);
      assert.noFile(dockerFiles);
    });

  });

  describe('default with Heroku and Docker', function () {

    before(function () {
      helpers.run(path.join(__dirname, '../app'))
        .withPrompts({
          microservice: "Node",
          username: "Abdizriel",
          email: "kontakt@marcinmrotek.pl",
          docker: true,
          heroku: true
        })
        .withOptions({ 'skip-install': true })
        .toPromise();
    });

    it('should create default and Heroku files', function () {
      assert.file(commonFiles);
      assert.file(herokuFiles);
      assert.file(dockerFiles);
    });

  });

});
