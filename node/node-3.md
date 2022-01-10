## Node.js

[Node.js](https://en.wikipedia.org/wiki/Node.js) is an open-source, cross-platform **run-time environment** built on Chrome's V8 JavaScript engine.

Node.js is used to execute **JavaScript** code outside of a web browser. It provides a library of various JavaScript modules, which simplifies the development of web applications. 

Global companies like Netflix, Facebook, Walmart Linkedin, Uber, etc., use Node.js for building their applications. It has helped companies create various applications like social media apps, video and text chat engines, real-time tracking apps, online games, and collaboration tools.

## npm - node package manager

[npm](https://en.wikipedia.org/wiki/Npm_(software)) is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment -Node.js. 

npm consists of three components - the website, the Command Line Interface (CLI), and the registry. The **website** discovers packages, set up profiles, and manage access to public or private packages. The **CLI** runs from a terminal and allow us to interact with npm. The **registry** is a public database of JavaScript packages comprised of software and metadata.

## Why we need Node.js for Angular

We use Node.js and npm as tools for building Angular or React apps. Angular is a front-end framework used to create a web application and is written in Typescript. The browser only understands JavaScript code, so we need to compile Typescript (.ts file) to plain JavaScript (.js file). We use Node.js and npm to perform this compilation, then we can deploy them in production.

### Installation of Node and npm

We need to add Node.js and an npm package manager to our development environment.

* Download Node.js from [nodejs.org](https://nodejs.org/en/download/) and install it. To check the version, run `node -v` in a terminal.

* The npm CLI gets installed with Node.js by default. To check that you have installed npm, run `npm -v` in a  terminal. npm can install packages in a **node_modules** folder in our working directory. 

## References 

* [Angular Docs - Setup](https://angular.io/guide/setup-local)