1. cd into whatever folder youd like to setup your project in
2. npm init
default answers are all ok except entry point must be the js file you want to run
3. npm start
(node {file.js} also works but npm links our package.json info and our libraries)

for typescript:
1. if you cant use tsc --version:
npm i -g typescript
2. make a tsconfig.json
this is to know some info like which version of js to compile to
es5 vs es6
emcascript === javascript
2. tsc {file.ts}
this will generate a js file
3. run the js file normally