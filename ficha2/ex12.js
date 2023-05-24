function mesclarObjetos(a, b) {
    var objeto = { ...a };

    for (var prop in b) {
        if (b.hasOwnProperty(prop)) {
            objeto[prop] = b[prop];
        }
    }

    return objeto;

}

var objeto1 = {
    nome: "João",
    apelido: "Cruz",
}

var objeto2 = {
    idade: 23,
    cidade: "São Paulo",
}

console.log(mesclarObjetos(objeto1, objeto2));