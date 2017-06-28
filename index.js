var fs = require('fs');
var strings = require("underscore.string");

module.exports = function(dir, mode) {
  var requires = {};

  if (!mode) {
    mode = 'camelize'
  }

  fs.readdirSync(dir).forEach(function (file) {
    if (['.', '..', 'index.js'].indexOf(file) > -1) return;

    var name = file.split('.').slice(0,-1).join('.');

    switch (mode) {
      case 'classify':
        name = strings.classify(name);
        break;

      default:
        name = strings.camelize(name);
        break;
    }

    requires[name] = require(dir+'/'+file);
  });

  return requires;
};
