//el modulo http permite utilizar el protocolo http en nuestro servidor
//http permite recibir peticiones desde el cliente y poder responderle desde el servidor
const http = require('http');
//requeriendo el modulo colors
const colors = require('colors');

//creando la funcion dentro de esta constante
const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });//200=OK, tipo de contenido
    res.write('<h1>Hola mundo desde NodeJS</h1>');
    res.end();//terminando la respuesta
}

//creando el servidor
const server = http.createServer(handleServer);

//listen <- indica el puerto del servidor
server.listen(4000, function(){
    console.log('Server on port 4000'.yellow);
});//localhost:4000
