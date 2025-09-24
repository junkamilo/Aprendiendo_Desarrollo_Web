/**para culcular cuantos dias tiene años de edad se multiplica el valor por 365 dias del año
 * edad * 365
 * 
 * para calcular cuantas semanas tiene la edad se multiplica la edad por 52 semanas que trae el año
 * edad * 52
 * 
 * para calcular cuantos meses tiene la edad se multiplica la edad por 12 meses que trae el año
 * edad * 12
 */

function calcularAñosVidaRestante(edad) {
    // 1. Definir la expectativa de vida máxima (90 años)
    const ESPERANZA_VIDA = 90;

    // 2. Calcular los años que quedan por vivir
    let añosRestantes = ESPERANZA_VIDA - edad;

    // 3. Realizar los cálculos de tiempo restante
    let diasRestantes = añosRestantes * 365;
    let semanasRestantes = añosRestantes * 52; // Aproximadamente 52 semanas por año
    let mesesRestantes = añosRestantes * 12;

    // Mensajes de la consola
    console.log(`Verificamos cuánto tiempo de vida te queda (asumiendo ${ESPERANZA_VIDA} años).`);
    console.log(`Te quedan ${añosRestantes} años por vivir.`);
    
    console.log(`Te quedan ${diasRestantes} días.`);
    console.log(`Te quedan ${semanasRestantes} semanas.`);
    console.log(`Te quedan ${mesesRestantes} meses.`);

    console.log("--------------------");
    console.log(`En total, te quedan ${diasRestantes} días, ${semanasRestantes} semanas y ${mesesRestantes} meses.`);
}

calcularAñosVidaRestante(22);