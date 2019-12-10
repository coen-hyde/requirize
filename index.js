const fs = require('fs');
const path = require('path');
const strings = require("underscore.string");

module.exports = function(dir, mode) {
  var requires = {};

  if (!mode) {
    mode = 'camelize'
  }

  fs.readdirSync(dir).forEach(function (file) {
    if (['.', '..', 'index.js'].indexOf(file) > -1) return;
    let fileInfo = path.parse(file);

    switch (mode) {
      case 'classify':
        name = strings.classify(fileInfo.name);
        break;

      default:
        name = strings.camelize(fileInfo.name);
        break;
    }

    requires[name] = require(dir+'/'+file);
  });

  return requires;
};
