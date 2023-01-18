const http = require('http');
var randomWords = require('random-words');
console.log(randomWords());

const hostname = 'localhost';
const port = 3030;

const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(randomWords() + '\n');
});

server.listen(port,hostname, () =>{
});