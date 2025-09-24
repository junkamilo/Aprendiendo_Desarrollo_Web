//pedimos datos al usuario
let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ingresa tu apellido");

//imprimimos datos del usuario
console.log("Tu nombre completo es " + nombre + apellido);

//calculamos numeros de letras de su nombre completo
let numeroCaracteres_nombre = nombre.length;
let numeroCaracteres_apellido = apellido.length;
let sumaTotalCaracteres = numeroCaracteres_nombre + numeroCaracteres_apellido;
console.log("Su nombre completo cuenta con numero en total de caracteres de " + sumaTotalCaracteres);

