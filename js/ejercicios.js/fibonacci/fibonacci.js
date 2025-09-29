function fibonacci(num) {
    let numero = 0;
    for (let i = 1; i <= num; i++) {
        numero = numero + i;
    }
    console.log(numero);
}
fibonacci(10);