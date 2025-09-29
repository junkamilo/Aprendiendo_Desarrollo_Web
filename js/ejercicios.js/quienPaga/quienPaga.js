/**creamos los nombres de los participantes */
let nombres = ["Ángela", "Ben", "Jenny", "Michael", "Chloe"];
function quienPaga(nombres) {
  let numerosPersonas = nombres.length;
  let numeroAleatorio = Math.floor(Math.random() * numerosPersonas);

  for (let i = 0; i < nombres.length; i++) {
    if (numeroAleatorio === i) {
      console.log(`${nombres[i]} is going to buy lunch today!`);
    }
  }
}
quienPaga(nombres);
