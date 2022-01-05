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