function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        console.log("no se puede dividir por 0");
    } else {
        return a / b;
    }
}

// console.log(add(1, 3));
// console.log(substract(1, 3));
// console.log(multiply(1, 3));
// console.log(divide(1, 0));

//exportando mis funciones para poder llamarlos desde otro archivo
// exports.sumar = add;
// exports.dividir = divide;
// exports.restar = substract;
// exports.multiplicar = multiply;
//--------------- o ------------------
//creo mi objeto llamado math
const Math = {};
//creo las propiedades de mi objeto
Math.add=add;
Math.substract=substract;
Math.multiply=multiply;
Math.divide=divide;
//exporto mi objeto Math
module.exports = Math;


//exportar mi funcion
function hello(name){
    console.log('hola '+name);
}
module.exports = hello;