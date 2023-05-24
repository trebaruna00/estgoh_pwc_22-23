function calcularfactorial(numero){
    if (numero == 0  || numero == 1){
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <=numero; i++){
            factorial *= i;
        }
        return factorial;
    }
}

console.log(calcularfactorial(5));
