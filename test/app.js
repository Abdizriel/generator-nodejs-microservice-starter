'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-nodejs-microservice-starter:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({docker: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'server',
      'nginx',
      'README.md',
      'Procfile',
      'package.json',
      'LICENSE',
      '.travis.yml',
      '.jshintrc',
      '.gitignore',
      '.editorconfig',
      '.babelrc',
      'Dockerfile',
      'docker-compose.yml'
    ]);
  });
});
