"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var quiz_1 = require("./quiz");
/*
What is node.js?
a runtime environment for javascript
can be utilized as a server side software
takes advantage of javascript event-driven programming

What is npm?
node package manager
package.json is our configuration file

What is typescript?
Typescript is a superset of javascript developed by Microsoft
typescript does everything javascript does and it adds additional strongly types and object-oriented functionality
(oops)
We don't actually run typescript
We transpile typescript to javascript
Transpiling is kind of like compiling: transpiling is turning one higher-level language into another (typescript to javascript)
in the same way that compiling is more referring to turning a higher-level language into a lower level (java to bytecode/assembly)
higher level languages are abstracted in terms of functionalities like memory management, function calls, garbage collection

Feature of typescript:
Strongly typed (whereas js is loosely)
Easies to debug due to compile-time errors
Has ways to achieve object-oriented programming

Datatypes:
-things from javascript
    -boolean, number, string, undefined, null
-things from typescript
    -void, enum, tuple, any
    enum stoplight: green, yellow, red
    tuple: [number, boolean]
    any: how variables work in javascript
*/
var str = "test";
var num = 4;
// we can't do this anymore:
// str = 4;
var multi = "hello";
var arr1 = [1, 2, 3, 4];
var carStates;
(function (carStates) {
    carStates[carStates["OFF"] = 0] = "OFF";
    carStates[carStates["IDLE"] = 1] = "IDLE";
    carStates[carStates["STOPLIGHT"] = 2] = "STOPLIGHT";
    carStates[carStates["ACCELERATE"] = 3] = "ACCELERATE";
    carStates[carStates["DRIVING"] = 4] = "DRIVING";
})(carStates || (carStates = {}));
;
var myCar = carStates.DRIVING;
function myFunction(argument1, argument2) {
    argument1 = argument2;
    return;
}
var function2 = function () {
    return "arrow function";
};
function2();
var myuser;
myuser = {
    id: 1,
    username: "thomas_johnson",
    password: "password123"
};
console.log(myuser.username);
// unles interfaces, objects can be expected to have their own independent behavior
var Hero = /** @class */ (function () {
    function Hero(name, password) {
    }
    Hero.prototype.fight = function () {
        console.log("throws punch");
    };
    Hero.prototype.functionThrowsError = function () {
        throw new Error("this function throws an error");
    };
    return Hero;
}());
var thomas = new Hero("thomas_johnson", "password123");
// superhero inherits all behavior from hero unless we tell it otherwise
var Superhero = /** @class */ (function (_super) {
    __extends(Superhero, _super);
    function Superhero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Superhero.prototype.fight = function () {
        console.log("heat ray");
    };
    return Superhero;
}(Hero));
/*
access levels/ modifiers
encapsulation = things arent always visible outside of the class that made them

public : accessible anywhere
protected : accessed within the class and subclass
private : can be accesses only within the class
*/
// all classes that extend food will implement goBad and have the variables within it
var Food = /** @class */ (function () {
    function Food() {
    }
    return Food;
}());
var Pizza = /** @class */ (function (_super) {
    __extends(Pizza, _super);
    function Pizza() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pizza.prototype.goBad = function () {
        console.log("moldy");
    };
    return Pizza;
}(Food));
var mypizza = new Pizza();
mypizza.goBad();
/*object oriented programming:
//you wont be asked about these in qc

inheritance
    -inheriting behavior of classes
encapsulation
    -data hiding
polymorphism
    -overload
        -not in javascript
        -in other languages we can have multiple functions with the same name but different parameters
    -overwrite
        -a class that extends another can overwrite the parent class funncntions
abstraction
    -information is hidden from the programmer through human-readable simplifications

*/
var Pet = /** @class */ (function () {
    //access modifier
    function Pet(name) {
        this.name = name;
    }
    Pet.prototype.getName = function () {
        return this.name;
    };
    return Pet;
}());
var cat = new Pet("snowball");
// Property 'name' is private and only accessible within class 'Pet'.
//cat.name;
var q = new quiz_1.Quiz();
