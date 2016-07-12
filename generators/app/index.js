'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the super-duper ' + chalk.red('generator-nodejs-microservice-starter') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'docker',
      message: 'Would you like to have docker?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    // Copy Server
    this.fs.copy(
      this.templatePath('server'),
      this.destinationPath('server')
    );
    // Copy License
    this.fs.copy(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE')
    );
    // Copy Package
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    // Copy Procfile
    this.fs.copy(
      this.templatePath('Procfile'),
      this.destinationPath('Procfile')
    );
    // Copy README
    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );
    // Copy babelrc
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
    // Copy editorconfig
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    // Copy gitignore
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    // Copy jshintrc
    this.fs.copy(
      this.templatePath('.jshintrc'),
      this.destinationPath('.jshintrc')
    );
    // Copy Travis
    this.fs.copy(
      this.templatePath('.travis.yml'),
      this.destinationPath('.travis.yml')
    );
    if(this.props.docker) {
      // Copy Dockerfile
      this.fs.copy(
        this.templatePath('Dockerfile'),
        this.destinationPath('Dockerfile')
      );
      // Copy Docker Compose
      this.fs.copy(
        this.templatePath('docker-compose.yml'),
        this.destinationPath('docker-compose.yml')
      );
      // Copy NGiNX
      this.fs.copy(
        this.templatePath('nginx'),
        this.destinationPath('nginx')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      npm: true,
      bower: false
    });
  }
});
