var filme = {
    titulo: 'Spider Man',
    genero: 'Ação'
}

function adicionarPropriedade(objeto, propriedade) {
    // Criar cópia do objeto
    var temp = { ...objeto };
    temp[propriedade] = null;
    return temp;
}

console.log('objeto antes da função: ', filme);
const novoObjeto = adicionarPropriedade(filme, 'ano');
console.log('objeto depois da função: ', novoObjeto);
console.log('objeto original', filme);