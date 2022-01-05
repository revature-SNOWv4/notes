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



/* 
do we need semicolons in JS? 
        no... no you dont
is it a good idea?
    By convention and keep in mind that the interpreter can make a mistake.
*/

console.log("double quotes ${}");
console.log('single "quotes"');

//this is a string literal
console.log(`back "ticks"`); // we can add variables into this string with the ${} syntax

let poo = "POO";
let num7 = 7.43
console.log(`back ticks ${num7}`);

console.log("double quotes", poo);


/* 
    What are the primitive data types in JS?
        string, number, boolean, null and undefined
            (BigInt and Symbol with the latest ECMAScript)
    ECMAScript is a standardization of functionalities that a scripting language should have. ES6
    
*/


/* JavaScript is loosely typed language. (We dont have to specify the data type) */

/* 
    var varialeName = value;
    let varialeName = value;
    const variableName = value;
*/

var num = 5;
var dub = 5.5;
console.log(num);

num = "Changing the datatype on the fly?";
console.log(num);

var nameOne = 'Billy \n "The Warden"'; //if I need to used double quotes in my string, use the single quotes when assigning the string
var nameTwo = "Billy \n 'The Warden'";

console.log(nameOne);
console.log(nameTwo);


var num2;
console.log(num2); //undefined is essentially a SYSTEM defined "null" value

var num3 = null;
console.log(num3); // null is essentially a USER defined "null" value


var bool1 = false;

console.log(bool1);



/* 
JavaScript Reference Types:
    - objects 
    - arrays
    - functions
*/


/* get super familiar with this syntax. */
var billy = {
    firstName: "Billy",
    lastName: "The Kid",
    anotherObject: {
        key1: "val1",
        key2: "val2"
    },
    arrayObject: [1,2,3]
}

console.log(billy.firstName);


var exampleArr = ["true", false, 5, [1,2,3], {}, function(){
    console.log("my func in an array")
}];

console.log(exampleArr);

exampleArr[5]();



function exampleFunction(){
    return 6;
}

var six = exampleFunction();

console.log(six);

function doubleNum(num){
    return num * 2;
}

var doubled = doubleNum(12);
console.log(doubled);   


var arrowFunc = () => {
    console.log("arrowFunc invoked");
};

arrowFunc();


var isgreaterThan10 = (num) => {
    if(num >= 10){
        console.log(num + " is greater than (or equal to) 10!!");
    }else{
        console.log(num + " is less than 10. womp womp")
    }
}

isgreaterThan10(8);


console.log(typeof(num));
console.log(typeof(dub));
console.log(typeof(num3));
console.log(typeof(billy));
console.log(typeof(isgreaterThan10(12)));
console.log(typeof(doubleNum(3)));


/* 
    == vs ===
    == compares value
    
    === compares value AND datatype
    
*/


console.log(5 == "5"); // prints true
console.log(5 === "5"); // prints false
console.log(5 == "five"); // prints false
console.log(false == 0); //prints true
console.log(true == 10); //false
console.log(true == 1); //true


console.log(-6/0);
console.log(typeof(-6/0));
console.log(Infinity == Infinity);
console.log(Infinity/Infinity);
console.log(typeof(NaN));
console.log(0/10);





/* 
    What is a truthy value?
        anything that is not a falsey value
    What are falsey values?
        false, 0, null, undefined, "", NaN
*/


var x = "0";

if(x){
    console.log("printed!");
}


/* 
    So far we have been using var to declar our variables however this is a little dated.
    After ES6, "let" and "const" were added to JavaScript
        - let is an alternative to var but has a couple different properties
        - const is essentially a final variable
    var vs let
    - var variables are hoisted and let variables are not.
    - let has additional scopes
    What is Hoisting?
        - the interpreter appears to move the variable/function declaration to the top of their scope.
        - so if you attempt to use var before it is declared it will show "undefined" instead of an error
    What are the Scopes in JavaScript?
        - global - can be seen globally in the application (even other javascript files)
        - function - can be seen within the function. can see global variables
        - block - can be seen within the block
        - lexical - functions created in a function have access to the variables in the parent function
    NOTE: 
        - var has global and function scope only.
        - let has all 4
    
*/

let globalScope = 0;

function scopeFunc(){
    //functionScope cannot see block or lexical
    let functionScope = 1;
    let variable;
    if(true){
        variable = 2;
        console.log(functionScope)
    }

    innerFunc();

    console.log(variable);

    function innerFunc(){
        console.log("test");
    }

}

scopeFunc();

/* 
    Type coercion is when a variable is when a variable has implicitly changed data types.
*/
let test = 4;
test = "test";


