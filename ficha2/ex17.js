function removePropriedade(objecto, propriedade) {
    var novoObjecto = {};
    for(var prop in objecto) {
        if(prop != propriedade) {
            novoObjecto[prop] = objecto[prop];
        }
    }
    return novoObjecto;
}

console.log(removePropriedade({a: 1, b: 2, c: 3}, "a"));