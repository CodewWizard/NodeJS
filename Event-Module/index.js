const eventEmitter = require("events");

const e = new eventEmitter();

e.on("sayMyName", ()=>{
    console.log('your name is madiha');
})

e.on("sayMyName", () => {
    console.log('your name is mujawar');
    
})

e.emit("sayMyName");