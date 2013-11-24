var ctrlr = require('../../');

var controllers = ctrlr(__dirname + '/controllers/');

controllers.cars.invokeAction('drive', ['Filmore and Geary', 'Grant Ave and O\'farrel']);
controllers.cars.invokeAction('shiftGears', [3]);
controllers.cars.invokeAction('noSuchAction', null, function(err) {
    console.log(err.stack);
});
