// write your code here
const http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
    console.log(`Received ${req.method} request for:${req.url}`);
});

server.listen(8080,'127.0.0.1', () => {
    console.log(`Server is listenting at http:\\127.0.0.1:8080`);
});