'use strict';

const Base = require('yeoman-generator').Base;
const MainGenerator = require('../_generator').MainGenerator;

module.exports = class NodeMicroservice extends Base {

  constructor(args, options, config) {
    super(args, options, config);

    this.generator = new MainGenerator(this);
  }

  initializing() {
    this.pkg = require('../package.json');
  }

  prompting() {
    this.generator.sayHello();
  }

  writing() {
    this.generator.writing();
  }

  install() {
    this.generator.install();
  }

  promptUser() {
    this.generator.promptUser();
  }

  promptMicroservice() {
    this.generator.promptMicroservice();
  }

  promptDocker() {
    this.generator.promptDocker();
  }

  promptHeroku() {
    this.generator.promptHeroku();
  }

};
