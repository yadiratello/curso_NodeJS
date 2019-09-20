//el modulo http permite utilizar el protocolo http en nuestro servidor
//http permite recibir peticiones desde el cliente y poder responderle desde el servidor
const http = require('http');

//creando el servidor
http.createServer(function(req, res){
    res.writeHead(200,{'Content-type':'text/html'});//200=OK, tipo de contenido
    res.write('<h1>Hola mundo desde NodeJS</h1>');
    res.end();//terminando la respuesta
}).listen(4000);//localhost:4000

//liten <- indica el puerto del servidor

//iniciando el servidor