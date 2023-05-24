function obterValores(objeto) {
    return Object.values(aluno);
}

var aluno = {
    nome: "João",
    apelido: "Cruz",
}

console.log(obterValores(aluno));