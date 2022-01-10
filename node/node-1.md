The following content is meant to serve as an introduction to Node.js rather than JavaScript. We will begin with a brief description of JavaScript in general to set the scene so that one will be able to identify how the language itself is different from the runtime of Node.js.

For more content on JavaScript in particular, please navigate [here](https://gitlab.com/revature_training/javascript-team/-/tree/master/modules/javascript-fundamentals).

# Intro to JavaScript

JavaScript was created by Brendan Eich in 1995 during his time at Netscape. Since then, it has become the predominant programming language for the web. Ironically due to its proliferative nature and a lot of the quirky design choices that were made about the language as it was being created, some consider the language to be one of the most hated in the world. At a surface level, facts about JavaScript can seem awkward and unnecessarily confusing, where seemingly simple questions like "who owns JavaScript?", "is JavaScript really an Object-Orient Programming language?", or "is JavaScript compiled or interpreted?" have answers that are surprisingly nuanced. JavaScript has a lot of good and bad to it, but admittedly a lot of the bad qualities of JavaScript have been addressed relatively recently with the release of ES6 and subsequent releases. Nowadays, the language has a lot of versatility, but its reputation still suffers from the faults present in its first 20 years of existence. Today, JavaScript is defined by ECMAScript Language Specifications from the committee #tc39.

It is important to be able to describe what JavaScript is. At first, JavaScript was used primarily for developing client-side components of applications (web development). At a high-level, JavaScript can be described as a "**scripting** or programming language that allows you to implement complex features on web pages"([Mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)). It is also usually considered an **interpreted** language when it is used for web development since you can give browsers JavaScript, and then browsers will know how to _interpret_ these instructions by default.

When a browser runs JS, it uses some sort of engine to actually execute the script. Each browser has its own engine, but the one we are going to be concerned about is the `V8 engine`. This engine was developed by Google and is present inside of the Google Chrome Browser.

# Intro to Node.js

Node.js is often described as an asynchronous event-driven JavaScript runtime that is wrapped around the V8 engine. To put it simply, Node.js is a runtime for JavaScript outside of browsers. It is commonly used to allow developers to write their servers in JS.

In order to understand the relevance of Node.js in the industry, it is important to understand its history. As we know, JS was created in 1995 specifically to be used as a client-side technology. At first, JavaScript was the language used to write logic in the front-end of applications. It was generally identified as a poor choice for a server-side language for a variety of reasons including the fact that it was originally designed to make webpages more dynamic rather than operate in the asynchronous manner required of traditional server-side programming languages. Web servers also typically have the need for asynchronous and non-blocking behavior, which JS just didn't have at the time.

Node.js was created in 2009 in order to provide a solution to these problem. Although it was not the first one to do so, it was able to provide way to run JS outside of a browser, which was accomplished by using the V8 engine. One of the other big accomplishments of node is allowing for asynchronous and non-blocking behavior. JS by default is single-threaded, which means that it can't follow more than one line of execution at a time. This is problematic in the case of a web server because servers are expected to send responses to more than one client at a time. In other words if two clients make a request of a server at the same time. The second client should not have to wait for the first client's response to be served in order for their request to be served. The ability for a server to serve two clients "at the same time" is `asynchrnous` behavior since one does not have to wait for the other. Long story short, the language of JS doesn't have the ability to operate asynchronously by default, but node gets around this by using the `event loop` which will be discussed later.

It is important to recognize that the creation of Node.js did not change the language of JavaScript directly. it was merely JavaScript being used in the runtime of Node.js. The JS language itself would not receive a lot of these changes directly until 2016 with the onset of `ES6`. For this reason, nowadays, it can sometimes be difficult to ascertain whether we have certain features due to ES6, Node.js, or both. Every now and then, you will come across two completely different ways of accomplishing the same thing.

A lot of this can easily be confusing so here is a summary. For now, think of node.js as a runtime environment that allows you to run JS outside of a browser. JS by itself doesn't have the ability to accomplish a lot of the requirements to be a web server, so node contains a lot of supporting functionality that will bridge the gap. Independent of node, there is something called "ES6" which brought in much needed changes to the JavaScript language that fixed a lot of problems that were independently addressed in node.

More resources:

- [History of Node](https://blog.risingstack.com/history-of-node-js/)
- [Node vs JavaScript](https://www.youtube.com/watch?v=klen07C1M-c)

# Installing Node

You can download Node for free [here](https://nodejs.org/en/). The two main options you are presented with are the `current` version and the `LTS` version. The current version has the latest features available, but not all of them are guaranteed to be stable. LTS stands for "Long Term Support" and is the version that is recommended for download for most users.

Alternatively, if you can also download node using a package manger. If you are using `Chocolatey` for Windows the line below will allow you to download node:

> choco install nodejs-lts

After installing Node, you can run .js files using the node command:

```bash
    node Name-Of-File.js
```

# Running Scripts with Node

You can run node scripts in the command line. The simplest way of doing is is creating a .js file and then executing it using the `node` command. For example, let's say that we have a JavaScript file called _index.js_. We can run the file in node using the following command:

> node index.js

Alternatively you can also execute code in a `REPL` session. REPL stands for Read Eval Print Loop. Essentially using the node command, you can write and execute scripts in the REPL terminal by simply executing the `node` command by itself:

> node

It is somewhat reminiscent of the JavaScript console in browsers.Here is an example output:

```bash
$ node
Welcome to Node.js vX.X.X.
Type ".help" for more information.
> 5 + 5
10
> console.log("Hello World")
Hello World
> x = function(){return "I am a function"}
[Function: x]
> x()
'I am a function'
>
```

Note that `undefined` will be printed out in the case of the executed line not returning anything. Similarly the output will look different for objects (such as functions) that are returned. you can type `.help` in your REPL terminal to get a list of additional options.

Additional resources:

- [Node REPL](https://nodejs.org/api/repl.html)

# Modules with the CommonJS Specification

One of the great features of Node is that by default it allows you to work with **modules**. A module is essentially a unit of JS code that is meant to be reused by means of `exporting` and then `importing`. By default, Node will allow you to do this using the `CommonJS Specification`. For example let's say you had a function that you wanted to reuse later on in a file called `add1.js`

```js
function add1(arg) {
	return arg + 1;
}
module.exports = add1; //we are allowing for the function add1 to be imported by other files
```

Now let's say that we wanted to use this function in a different file, perhaps one called `other-file.js`. We can do so as seen below:

```js
//the 'require' function imports the thing exported by the specified file
let add1 = require('./add1');
console.log(add1(4)); // prints out 5
```

The first line creates a variable called "add1" that is equal to the imported add1 function from the file called `add1.js`.

# ES6 Modules

Although this is technically not part of node, there is another way to deal with `importing` and `exporting` that you are likely to see. ES6 provides a way of creating `modules` using the their own keywords. Keep in mind that this has nothing to do with the CommonJS Specification and is a completely independent approach to modules that does not come with node.js by default (depending on the version of node). You can find more notes on this concept [here](../nodejs-ts/nodejs-typescript.md).

- Learn more [here](https://www.tutorialspoint.com/es6/es6_modules.htm)

# The Event Loop

The Event Loop is a structure that receives events from JavaScript and then executes the appropriate processes or event handlers based off of the event that was emitted. Using the Event Loop, Node.js gains the ability to perform asynchronous operations despite the fact that JavaScript is single-threaded. By default, since JS is single-threaded, that means that it only has one call stack. This essentially means that it can only execute methods one at a time in a particular order and subsequent function calls on the stack cannot execute before a previous function is completed. This can be an inefficient use of time since the program ends up waiting on other processes to finish before starting other processes. For example, if your program makes a network call to a server (which would in turn remotely execute some other processes), it doesn't make sense for your program to just wait for the completion of that external process before continuing to execute. So now that leads to the question: how do we get around this? The answer to that is to use asynchronous callbacks.

Using callback functions, Node.js will offload operations to the system kernel whenever possible. Kernels tend to be multi-threaded, so they aren't as prone to suffer from the same blocking issues that single-threaded systems would. Essentially, processes that are desired to be executed asynchronously will be stored in a structure external to the actual single-threaded language so that the job can be done more efficiently.

There are several ways you could utilize asynchronous programming in Node including using setTimeout(), setImmediate, process.nextTick, event emitters, etc.

- [Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [Event Loop in Node.js - Backend Development](https://www.youtube.com/watch?v=lGiv0zfdiJA)
- [Tutorialspoint Event Loop](https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm)

# Sources/Useful Links

- [JavaScript Documentation from Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js Docs](https://nodejs.org/en/docs/)
- [Modern JavaScript](https://www.modernjs.com/what-is-modern-js.html)