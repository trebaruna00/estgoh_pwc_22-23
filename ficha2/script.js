var aluno = {
    nome: "João",
    idade: 20,
    apelido: "Cruz",
}

function dizOla(aluno) {
    aluno.nome = "João Pedro";
    return "Olá, " + aluno.nome + " " + aluno.apelido;
}

function dizAdeus(aluno) {
    return "Adeus, " + aluno.nome + " " + aluno.apelido;
}

/*
var nome = "João";

function dizOla(nome) {
    nome = "João Pedro";
    return "Olá, " + nome;
}

function dizAdeus(nome) {
    return "Adeus, " + nome;
}

dizOla(nome); -> "Olá, João Pedro"
dizAdeus(nome); -> "Adeus, João"
*/


console.log(dizOla(aluno));
console.log(dizAdeus(aluno));