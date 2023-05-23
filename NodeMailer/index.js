const express = require("express");
const app = express();

// 1. practicing some stuff
let PORT = 5000;

app.get("/", (request, response) =>{
    response.send("I am a SERVER");
})

const start = async() => {
    try {
        app.listen(PORT, ()=>{
           console.log(`I am live in port no ${PORT}`);
        })
    } 
    catch (error) {}
}

start();

// 2. sending mail 
const sendEmail = require("./sendEmail");

app.get("/mail", sendEmail);
