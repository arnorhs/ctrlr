var directory = require('directory'),
    Controller = require('./lib/controller');

var load = function(dir) {
    var controllers = {};
    directory(dir, function(module, name) {
        controllers[name] = new Controller(name, module);
    });
    return controllers;
};

module.exports = load;
