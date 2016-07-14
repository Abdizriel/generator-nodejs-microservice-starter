'use strict';

import { Base } from 'yeoman-generator';
import MainGenerator from '../_generator';

export default class NodeMicroservice extends Base {

  constructor( ...args ) {
    super(...args);

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

  prompUser() {
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
