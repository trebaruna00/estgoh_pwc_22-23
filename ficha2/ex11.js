function removerDuplicados(array) {
    var novoArray = array.slice();
    for(var i = 0; i < novoArray.length; i++) {
        for(var j = i + 1; j < novoArray.length; j++) {
            if(novoArray[i] === novoArray[j]) {
                novoArray.splice(j, 1);
                j--;
            }
        }
    }
    return novoArray;
}

const array = [2, 2, 1, 3, 2, 5, 9, 1, 2, 5];

console.log(removerDuplicados(array));