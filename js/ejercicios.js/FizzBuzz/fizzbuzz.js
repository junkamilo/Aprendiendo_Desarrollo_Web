function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    /**primero se coloca la validacion grupal */
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
      /**Se imprimer el numero si ninguno de las condiciones no se cumple */
    } else {
      console.log(i);
    }
  }
}
fizzbuzz();

console.log("hacemos el mismo problemas pero esta vez con while y con un array");


/**ahora lo hacemos con while y llenando el array */
function fizzbuzzWhile() {
  const fizzBuzz = [];
  let i = 1;
  while (i <= 100) {
    fizzBuzz.push(i);
    i++;
  }

  /**imprimimos el array */
  for (let i = 0; i <= fizzBuzz.length; i++) {
      /**primero se coloca la validacion grupal */
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
        /**Se imprimer el numero si ninguno de las condiciones no se cumple */
      } else {
        console.log(i);
      }
    }
  }

fizzbuzzWhile();
