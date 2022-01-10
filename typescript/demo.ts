import {Quiz} from './quiz';
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
let str: string = "test";
let num: number = 4;
// we can't do this anymore:
// str = 4;
let multi: number | string | boolean = "hello";
let arr1: Array<number> = [1,2,3,4];
enum carStates{OFF, IDLE, STOPLIGHT, ACCELERATE, DRIVING};
let myCar = carStates.DRIVING;

function myFunction(argument1 : number | string, argument2 : string) : void {
    argument1 = argument2;
    return;
}

let function2 = () : string => {
    return "arrow function";
}

function2();


//interfaces are what we call a contractual guarantee that data will follow a particular format
interface User{
    id : number,
    username : string,
    //? : password is an optional field
    password? : string
}

let myuser : User;
myuser = {
    id: 1,
    username: "thomas_johnson",
    password: "password123"
}
console.log(myuser.username);

// unles interfaces, objects can be expected to have their own independent behavior

class Hero implements User {
    id : number;
    username : string;
    password : string;
    constructor (name : string, password : string){

    }
    fight(){
        console.log("throws punch")
    }
    functionThrowsError(){
        throw new Error("this function throws an error");
    }
}
let thomas : Hero = new Hero("thomas_johnson", "password123");
// superhero inherits all behavior from hero unless we tell it otherwise
class Superhero extends Hero {
    fight(): void {
        console.log("heat ray");
    }
}

/*
access levels/ modifiers
encapsulation = things arent always visible outside of the class that made them

public : accessible anywhere
protected : accessed within the class and subclass
private : can be accesses only within the class
*/

// all classes that extend food will implement goBad and have the variables within it
abstract class Food {
    type: string;
    calories : number
    abstract goBad();
}
class Pizza extends Food { 
    goBad() {
        console.log("moldy");
    }
}
let mypizza : Food = new Pizza();
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

class Pet{
    //access modifier
    constructor(private name:string){

    }
    getName(){
        return this.name;
    }
}
let cat: Pet = new Pet("snowball");
// Property 'name' is private and only accessible within class 'Pet'.
//cat.name;
let q = new Quiz();