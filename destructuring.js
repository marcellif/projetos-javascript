const pessoa = {
    nome: 'Nathália',
    idade: 17,
    profissao: 'Estudante'
};

//Aplicando destructuring no objeto pessoa
const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

//usando o destructuring em iuma função
function saudacao({ nome, idade }) {
    console.log('Olá,', nome);
    if (idade > 18) {
        console.log('maior de idade');
    }
}

saudacao(pessoa);

// aplicando destructuring em arrays
const frutas = ['uva', 'banana'];

const [primeira, segunda] = frutas;