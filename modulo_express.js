const express = require('express');
const colors = require('colors');


const server = express();//crea un servidor

server.get('/',(request,response)=>{
    response.send('<h2>Hola mundo con express y nodejs</h2');
    response.end();
})

server.listen(5000,()=>{
    console.log('server port 5000'.red);
    
});