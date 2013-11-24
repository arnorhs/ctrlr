function Controller(name, module) {
    this.name = name;
    this.module = module;
}

Controller.prototype.invokeAction = function(action, args, failureCallback) {
    var func = this.module[action];
    if (typeof func !== 'function') {
        if (typeof failureCallback === 'function') {
            failureCallback(new Error('No such action: "' + action + '" in "' + this.name + '" controller'), null);
        }
        return;
    }
    func.apply(this.module, args);
};

module.exports = Controller;
