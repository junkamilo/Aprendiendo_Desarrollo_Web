//estas funciones estan incorporadas en el js
//ejecutaremos la funcion slice que su funciones restringir el numeros de caracteres.
let comentario = "Ingrese un comentario, debe tener maximo 10 caracteres";
console.log("Se registro exitosamente su comentario...");
console.log("Su comentario fue " + comentario.slice(0,10));

//ejecutaremos toUppercase() convierte todas las letras a mayuscula
let comentarioMayusculas = "Ingrese un comentario, debe tener maximo 10 caracteres";
console.log("Se cambio tu comentario a mayuscula exitosamente...");
console.log(comentarioMayusculas.toUpperCase());

//creamos una funcion
function nameUsuario(){
    let nombreUsuario = "Juan camilo beltran campo";
    console.log("El nombre del usuario es " + nombreUsuario);
    
}
//llamamos a la funcion
nameUsuario();

//creamos la funcion con argumento y pasamos el parametro
function Mayordad(number) {
 let MayoredadSi = number >= 18;
 let MenorEdadNo = number < 18;
 console.log("Eres mayor de edad? " + MayoredadSi);
 console.log("Eres menor de edad? " + MenorEdadNo);
}

//llamamos al afuncion
Mayordad(1);


//creamos una funcion que retorna un valor
function NumeroSuma(a,b) {
    return a + b;
}
//llamamos la funcion
let sumaTotal = NumeroSuma(50,40);
console.log("La suma total es " + sumaTotal);

