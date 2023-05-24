function somarElementosPares(array) {
    var soma = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            soma += array[i];
        }
    }
    return soma;
}

const array = [2, 3, 6, 7, 10, 1];
console.log(somarElementosPares(array)); // 18