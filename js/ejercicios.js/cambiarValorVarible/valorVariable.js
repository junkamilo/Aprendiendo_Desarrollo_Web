/**Ejercicio cambiar valores de las variables */
let a = 20;
let b = 50;

console.log("Valor actual de la variable a" + a);
console.log("Valor actual de la variable b" + b);

//cambiamos valor de las variables
let c = a + b;
b = c;
a = b - 10;

console.log("valores actuales de las variables");
console.log("variable a " + a);
console.log("Variable b " + b);