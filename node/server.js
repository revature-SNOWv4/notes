/*npm init:
    you can probably just press enter for all the questions except for entry point (the js file you run)
    npm init -y;
npm start: starts the npm server
npm i {package}: installs some library - typically this also requires us to add something in scripts in package.json
(for cli)
npm i -g typescript*/

const http = require('http');

const requestListener = function (req, res){
    res.writeHead(200);
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);

console.log("test");