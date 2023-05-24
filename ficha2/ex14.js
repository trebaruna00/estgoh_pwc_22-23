function encontrarElemento(array, elemento) {
    for(var i = 0; i < array.length; i++) {
        if(array[i] === elemento) {
            return i;
        }
    }
}

const array = [2, 3, 6, 7, 10, 1];
console.log(encontrarElemento(array, 6)); // 2