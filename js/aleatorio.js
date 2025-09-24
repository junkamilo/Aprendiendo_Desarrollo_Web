function loteria(NumeroLoteria) {
    // 1. Generar el número de lotería una sola vez y guardarlo en una variable
    const numeroGanador = Math.floor(Math.random() * 10);

    // 2. Usar la variable para la comparación
    if (NumeroLoteria === numeroGanador) {
        console.log("Numero jugado = " + NumeroLoteria);
        console.log("Numero generado = " + numeroGanador); 
        console.log("Felicidades se gano la loteria");
        
    } else {
        console.log("Numero jugado = " + NumeroLoteria);
        console.log("Numero generado = " + numeroGanador); 
        console.log("NO se gano la loteria");
        
    }
}

loteria(5);