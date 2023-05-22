// Json stands for javascript object notation
// json is lightweight
// format for storing and transporting data
// json is often used when data is sent from a server to a webpage


const data ={
    name : "madiha",
    age : 19,
    lang : "java"
}

console.log(data.name);


// if we want to convert from object to json(string), use JSON.stringify() method

const jsonData = JSON.stringify(data);
console.log('object to json - ');
console.log(jsonData);


// if we want to convert from json to object, use JSON.parse() method

console.log('json to object - ');
const objData = JSON.parse(jsonData);
console.log(objData);