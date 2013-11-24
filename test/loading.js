var Controller = require('../lib/controller'),
    assert = require('assert'),
    ctrlr = require('../');


describe('loaded controller object', function() {
    var controllers = ctrlr(__dirname + '/dummy/');
    it('should have a valid controller named dummy', function(done) {
        assert(!!controllers.dummy, "Doesn't have a dummy controller");
        assert(controllers.dummy instanceof Controller, "Is not an instance of Controller");
        done();
    });
});

