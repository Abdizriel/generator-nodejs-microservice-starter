'use strict';
/**
 * @function directory
 * @description copy directory with following format
 * [
 *  ['generatorPath', 'generatedPath', options']
 * ]
 * @param {Object} gen - Yeoman generator
 * @param {Array} paths - Paths to copy
 * @param {Object} opts - Template variables
 */
exports.directory = function(gen, paths, opts) {

  if (!gen) {
    throw new TypeError('Generator is not defined.');
  }

  if (!gen.template || (typeof gen.template !== 'function')) {
    throw new TypeError('Template is not a valid method of the generator.');
  }

  paths.forEach(path => {
    gen.template(path[0], path[1], opts);
  });

};
