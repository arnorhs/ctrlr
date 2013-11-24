## ctrlr

### Simple controller dispatcher for node.

Auto loads all modules from a particular directory, using `directory`, and allows you to try to invoke the method.

There are some upcoming features, such as before actions etc.

(You can probably also use it on the client side with something like browserify)

Usage:
```
npm install ctrlr
```

Example usage:
```javascript
var controllers = ctrlr(__dirname + '/controllers/');

controllers.cars.invokeAction('drive', ['Filmore and Geary', 'Grant Ave and O\'farrel']);
controllers.cars.invokeAction('shiftGears', [3]);
controllers.cars.invokeAction('noSuchAction', null, function(err) {
    console.log(err.stack);
});
```

License: MIT
