function filtrarObjetosPorPropriedade(arrayObjetos, propriedade) {
    var array = [];
    for(var i = 0; i < arrayObjetos.length; i++) {
        if(arrayObjetos[i].hasOwnProperty(propriedade)) {
            array.push(arrayObjetos[i])
        }
    }
    return array;
}

var arrayObjetos = [
    {
        nome: "João",
        apelido: "Cruz",
        idade: 23,
        cidade: "São Paulo",
    },
    {
        nome: "Maria",
        apelido: "Silva",
        idade: 19,
        cidade: "Rio de Janeiro",
    },
    {
        nome: "Pedro",
        apelido: "Santos",
        idade: 30,
    }
];

console.log(filtrarObjetosPorPropriedade(arrayObjetos, "cidade"));