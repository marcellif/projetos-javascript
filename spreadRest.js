// Trabalhando com spread em objetos
const pessoa = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}


const pessoaClone = {
    ...pessoa,
    profissao: "Analista",
    hobbie:"cantar"
}

pessoaClone.nome = "Xuxa"

console.log(pessoa)
console.log(pessoaClone)


// rest operator
const { nome, ...restante } = camila1;

console.log(nome);
console.log(restante);