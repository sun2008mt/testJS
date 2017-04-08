/**
 * Created by marc on 17-3-29.
 */

var Module = (function () {
    var _private = 'safe now';
    var foo = function () {
        console.log(_private);
    }

    return {
        foo: foo
    }
})();

Module.foo();
console.log(Module._private);

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toShow = function () {
        return this.model + ' has already driven ' + this.miles + ' miles!';
    }
}

var benz = new Car('Benz', 2012, 2000);
var bmw = new Car('bmw', 2014, 5000);

console.log(benz.toShow());
console.log(bmw.toShow());