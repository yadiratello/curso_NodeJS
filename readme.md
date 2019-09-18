### Instalar nodejs
```
sudo apt install nodejs
```
### Ejecutar un archivo con nodejs
```
node nombre_archivo.js
```

### utilizando un modulo de npm para agregar color a los mensajes de consola
https://www.npmjs.com/package/colors
```
npm install colors
```
### utilizar ese modulo
```js
//requeriendo el modulo colors
const colors = require('colors');
console.log('Server on port 4000'.yellow);
```

## npm init
permite crear una lista de todos los modulos que necesitamos para que funcione mi proyecto y asi poder utilizarlos desde otro servidor
```
npm init
```
esto creará un archivo llamado package.json

package.json: es un archivo de meta informacion que tiene la responsabilidad de instalar todos nuestros modulos que voy a necesitar para correr mi proyecto

### express
Framework de nodejs

instalando el modulo express
```
npm install express --save
```

