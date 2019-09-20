//utilizando modulos preestablecidos por nodejs
//modulo del sistema operativo
const so = require('os');
//modulo archivos del sistema operativo
const fs = require('fs');
/*
console.log('Sistema Operativo: ',so.platform());
console.log('version: ',so.release());
console.log('memoria libre: ',so.totalmem());
console.log('memoria total: ',so.freemem());
console.log('directorio de trabajo: ',so.homedir());
*/


//crear un nuevo archivo
/*
fs.writeFile('./texto.txt','hola mundo',function(err){
    if(err){
        console.log(err);
    }
    console.log('archivo creado!');
    
});
console.log('ultima linea');
*/



//leer archivo
fs.readFile('./texto.txt',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());        
    }
})