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
* string
* number
* boolean
* null
* undefined
* object
* Symbol
*/

// semicolons are not necessary * 

var a_name = "a name";
var number = 4;
var array = [0, 1, 2];
var boolean = false;

a_name = 4;
a_name = [0, 1, true];

a_name = {
    first_name : "jackie",
    last_name : "crosswhite"
}

a_name = function(){
    console.log("what???");
}

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

function pythagoreanTheory(sidex, sidey){
    var result = Math.sqrt(sidex*sidex+sidey*sidey);
    return result;
}
if(a>b){
    console.log("do something");
}else{
    console.log("something else");
}

var c = 5;
var d = "5";
if(c==d){
    console.log("equal");
}