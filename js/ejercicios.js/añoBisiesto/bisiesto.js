function bisiesto(numeroAnio) {
  if (numeroAnio % 400 === 0 || (numeroAnio % 4 === 0 && numeroAnio % 100 !== 0)) {
    console.log("Año bisiesto .");
  } else {
    console.log("No es año bisiesto .");
  }
}
bisiesto(2001);
