var c;
/* 
    What is JavaScript?
        Its a scripting language originally designed to make our pages dynamic.

    What is a scripting language?
        Its a snippet of interpreted code that automates some functionality
        - a script is not compiled, its interpretted
        - by "interpretted", I mean its ran line by line

    JavaScript is interpretted in the browser.... originally 
    JavaScript has become so popular that there was demand to use javascript outside of the browser. 
    Eventually someone created a runtime environement called NodeJS.
*/
console.log(c); 
// undefined
c=2;
console.log(c);
// 2
pythagoreanTheorem(1,2);
//how do you print to the console in JS?
console.log("Hi JS!"); // this line is equivalent to System.out.println(); in Java
console.log('hi js!!');
console.log(`Hi JS!!`); //template literal: the string is represented exactly as-is
/*
variable types:
* string
* number
* boolean
* null
* undefined
* object
* Symbol
*/

// semicolons are not necessary * 
// creating vars:
var a_name = "a name";
var number = 4;
var array = [0, 1, 2];
var boolean = false;
// variables can be anything:
a_name = 4;
a_name = [0, 1, true];
// creating objects:
a_name = {
    first_name : "jackie",
    last_name : "crosswhite"
}
// one way to create functions:
a_name = function(){
    console.log("what???");
}
// calling functions:
a_name();

a_name="";

/*truthy and falsy values:
non-boolean values still can be used in a conditional statement
*/

if(a_name){
    console.log("how???");
}

number = "guljemal";

if(number){
    console.log("who???");
}


var a = 5;
var b = 0;
// creating functions:
function pythagoreanTheorem(sidex, sidey){
    var result = Math.sqrt(sidex*sidex+sidey*sidey);
    return result;
}
//calling functions:
var sidez = pythagoreanTheorem(4,5);
console.log(sidez);
// control flow (if statements)
if(a>b){
    console.log("do something");
}else{
    console.log("something else");
}
// == vs ===
var c = 5;
var d = "5";
// true
e = 5;
if(c==d){
    console.log("equal");
    var e = 2;
}
// false
if(c===d){
    console.log("equal");
}
// nested functions
function parent(){
    function child(){
        
    }
}
// control flow
for(let i = 0; i < 10; i++){
    console.log(i);
}
c = false;
// while
while(c){
console.log(c);
}
// do while
do{
    console.log(c);
}while (c);

/*
hoisting: javascript pretends that all functions and variables are declared at the start of the file

scopes:

global: can be seen globally by the application
function: can be seen within the function
block: can be seen within a block (for loop,  if statement, case, trycatch)
lexical: functions created in a function can have access to the variables in the parent function


variable types:
var - basic, global/function scope variable that can be anything
ES6:
let - all four types of scope
const - variable that can never be changed
*/

var arr = [5,4,9,0];
console.log(arr);

let sorted = arr.sort(function(a,b){
    if(a<b){
        return 1;
    }
    else{
        return -1;
    }
});
console.log(arr);

//this is a callback function
var functionVar = function(val){return val*2};
functionVar();
function returnResult(func, val){
    return func(val);
}
returnResult(functionVar);

var arr2 = [9, 7, 4, 3 , 19, 35];
/*
let doubled = arr2.map(function(element){
    return element*2;
});
console.log(doubled);*/

let filtered = arr2.filter(function(element){
    return ((element % 3) == 0);
});

console.log(filtered);

let reversed  = arr2.reverse();
console.log(reversed);

var arr3 = ["cat", [0, 1, 2], function(a){return a*a}];
console.log(arr3[2](3));
console.log(arr3[1][2]);

class animal {
    constructor(legs){
        this.legs = legs;
    }
    noise(){
        console.log("gurgle");
    }
    get legs(){
        return this.legs;
    }
    set legs(numLegs){
        this.legs = numLegs;
    }
}

var t = 2;
function change(u){
    u = 0;
}
change(t);
console.log(t);

var cat = new animal(4);
cat.noise();
console.log(cat.legs);

function amputate(animal){
    animal.legs = 3;
}
amputate(cat);
console.log(cat.legs);

var dog = new dog(4);
dog.noise();

var myString = "bacon";
console.log(myString.charAt(0));
console.log(myString.toUpperCase());
console.log(myString.substring(-3, -1));
index1 = -2
try{
    if(index1 < 0){
        throw new Error("impossible substring");
    }
    console.log(myString.substring(index1));
}catch(error){
    console.log(error);
}
// loosely typed of 
"use strict"
var z = "a message";
var z = 4;