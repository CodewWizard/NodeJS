const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    // console.log(request.url);
    if(request.url == "/userapi"){
        fs.readFile(`./userapi.json`, "utf-8", (err, data)=>{
            console.log(data);
            response.end(data);
        })
    }
    response.end('<h1>hello from port no 8000, this is madiha mujawar</h1>')
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log('in the server function, listening to the port 8000');
})