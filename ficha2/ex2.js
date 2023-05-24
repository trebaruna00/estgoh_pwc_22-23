
function obterPropriedades(objeto){
    return Object.keys(objeto);
}

const pessoa = {
    nome: 'João',
    idade: 20,
    apelido: 'Cruz'
}

console.log(obterPropriedades(pessoa)); // ['nome', 'idade', 'apelido']