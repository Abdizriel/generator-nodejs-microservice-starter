"use strict";

import chalk from 'chalk';
import yosay from 'yosay';

export default class MainGenerator {

  constructor(gen) {
    this.wrapper = gen;
  }

  sayHello() {
    this.wrapper.log(yosay('Welcome to the terrific ' + chalk.green('generator-nodejs-microservice-starter') + ' generator!'));
  }

  writing() {
    let microservice = this.wrapper.microservice;
    let username = this.wrapper.username;
    let email = this.wrapper.email;
    let docker = this.wrapper.docker;
    let heroku = this.wrapper.heroku;

    this.wrapper.template('README.md', 'README.md', { microservice, username, docker, heroku });
    this.wrapper.template('LICENSE', 'LICENSE', { username, email });
    this.wrapper.template('package.json', 'package.json', { microservice, username, email, docker, heroku });

    this.wrapper.template('.travis.yml', '.travis.yml');
    this.wrapper.template('.gitignore', '.gitignore');
    this.wrapper.template('.editorconfig', '.editorconfig');
    this.wrapper.template('.jshintrc','.jshintrc');
    this.wrapper.template('.babelrc', '.babelrc');

    this.wrapper.directory('server', 'server');

    if (heroku) {
      this.wrapper.template('Procfile', 'Procfile');
    }

    if (docker) {
      this.wrapper.template('Dockerfile', 'Dockerfile');
      this.wrapper.template('docker-compose.yml', 'docker-compose.yml');
      this.wrapper.directory('nginx', 'nginx');
    }

  }

  install() {
    this.wrapper.installDependencies({
      skipInstall: this.wrapper.options['skip-install'],
      npm: true,
      bower: false
    });

  }

  promptUser() {
    const done = this.wrapper.async();

    let prompts =[
      {
        name: 'username',
        message: 'What is your username on GitHub?',
        default: 'default-username'
      }, {
        name: 'email',
        message: 'What is your email?',
        default: 'example@example.com'
      }
    ];

    this.wrapper.prompt(prompts, props => {
      this.wrapper.username = props.username;
      this.wrapper.email = props.email;

      this.wrapper.config.set('username', this.wrapper.username);
      this.wrapper.config.set('email', this.wrapper.email);

      done();
    });

    this.wrapper.config.save();
  }

  promptMicroservice() {
    const done = this.wrapper.async();

    let prompts = [
      {
        name: 'microservice',
        message: 'What is the name of your microservice?',
        default: 'some-name-here'
      }
    ];

    this.wrapper.prompt(prompts, props => {
      this.wrapper.microservice = props.microservice;
      this.wrapper.config.set('microservice', this.wrapper.microservice);
      done();
    });

    this.wrapper.config.save();
  }

  promptDocker() {
    const done = this.wrapper.async();

    let _prompts = [{
      type: 'confirm',
      name: 'docker',
      message: 'Do you want a Docker containers?',
      default: false
    }];

    this.wrapper.prompt(_prompts, props => {
      this.wrapper.docker = props.docker;
      this.wrapper.config.set('docker', this.wrapper.docker);
      done();
    });

    this.wrapper.config.save();
  }

  promptHeroku() {
    const done = this.wrapper.async();

    let _prompts = [{
      type: 'confirm',
      name: 'heroku',
      message: 'Do you want a set up for Heroku?',
      default: false
    }];

    this.wrapper.prompt(_prompts, props => {
      this.wrapper.heroku = props.heroku;
      this.wrapper.config.set('heroku', this.wrapper.heroku);
      done();
    });

    this.wrapper.config.save();
  }

};
