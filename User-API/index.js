const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=>{
    // console.log(request.url);
    if(request.url == "/userapi"){
        fs.readFile(`./userapi.json`, "utf-8", (err, data)=>{
            // prints the data on console
            console.log(data);

            // prints the data on browser
            response.end(data);
        })
    }
})

server.listen(8000, "127.0.0.1", ()=>{
    console.log('in the server function, listening to the port 8000');
})
