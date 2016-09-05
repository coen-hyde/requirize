var fs = require('fs');
var camelize = require("underscore.string/camelize");

module.exports = function(dir) {
  var requires = [];

  fs.readdirSync(dir).forEach(function (file) {
    if (['.', '..', 'index.js'].indexOf(file) > -1) return;

    var name = camelize(file.split('.').slice(0,-1).join('.'));
    requires[name] = require(dir+'/'+file);
  });

  return requires;
};
