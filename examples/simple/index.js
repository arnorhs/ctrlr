var ctrlr = require('../../');

var controllers = ctrlr(__dirname + '/controllers/');

controllers.cars.getAction('drive')('Filmore and Geary', 'Grant Ave and O\'farrel');
controllers.cars.getAction('shiftGears')(3);
