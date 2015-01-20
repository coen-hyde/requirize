var fs = require('fs');

module.exports = function(dir) {
  var requires = [];

  fs.readdirSync(dir).forEach(function (file) {
    if (['.', '..', 'index.js'].indexOf(file) > -1) return;

    var name = file.split('.').slice(0,-1).join('.');
    requires[name] = require(dir+'/'+file);
  });

  return requires;
};