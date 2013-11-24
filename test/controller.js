var Controller = require('../lib/controller'),
    assert = require('assert');

// TODO: Add a test for seeing whether the right arguments are being passed in

describe('instance of Controller', function() {
    it('should have a method called invokeAction', function(done) {
        var c = new Controller("test", {});
        assert(!!c.invokeAction && typeof c.invokeAction == 'function', "Instance of Controller doesn't have invokeAction");
        done();
    });
    it('invoking no method should call the error callback with an error', function(done) {
        var c = new Controller("test", {});
        c.invokeAction('no action', [], function(err) {
            assert(err instanceof Error, "Argument passed to error callback is not an Error instance");
            done();
        });
    });
});
