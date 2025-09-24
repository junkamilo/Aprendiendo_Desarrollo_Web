function bmiCalculator(peso,altura){
    return Math.floor(peso / Math.pow(altura,2))
}

let bmi = bmiCalculator(65,1.8);

console.log("Su masa corporal es de " + bmi);
