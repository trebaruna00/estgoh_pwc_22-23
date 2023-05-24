function removerElemento (elemento,array){
    var novoArray = [];
    for (var i = 0; i < array.length; i++){
        if (array[i] !== elemento){
            novoArray.push(array[i]);
        }
    }
    return novoArray;
}

function removerElemento2(array, elemento) {
    // A função slice() devolve uma cópia de um array
    var copiaArray = array.slice();
    for(var i = 0; i < array.length; i++) {
        if(array[i] === elemento) {
            // A função splice() remove elementos de um array
            copiaArray.splice(i, 1);
            return copiaArray;
        }
    }
    return copiaArray;
}

const array = [1,2,3,4,5,6,7,8,9,10];
console.log(removerElemento(5,array));

console.log(removerElemento2(array, 5));
console.log(array);