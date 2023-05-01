const http = require('http');

const server = http.createServer((request, response)=>{
    console.log(request.url);
    response.end('<h1>hello from port no 8000</h1>');
    
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log('in the server function, listening to the port 8000');
})