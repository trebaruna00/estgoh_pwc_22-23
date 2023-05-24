function obterMaiorElemento(array) {
    var aux = 0;
    for(var i = 0; i < array.length; i++) {
        if(array[i] > aux) {
            aux = array[i];
        }
    }
    return aux;
}

const array = [2, 3, 6, 7, 10, 1];
console.log(obterMaiorElemento(array)); // 10