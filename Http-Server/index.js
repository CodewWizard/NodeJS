const http = require('http');

const server = http.createServer((request, response)=>{
    response.end('hello from port no 8000');
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log('in the server function, listening to the port 8000');
})