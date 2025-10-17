const pessoa = {
    nome: 'Silvio',
    sobrenome: 'Abravanel',
    idade: 80,
    pets: ['passarinho', 'cachorro'],
    nacionalidade: 'brasileiro'
}



const chaves = Object.keys(pessoa)

const valores = Object.values(pessoa)

const entradas = Object.entries(pessoa)

console.log("Chaves do objeto:", chaves)

console.log("Valores do objeto:", valores)

console.log("Entradas do objeto (chave/valor):", entradas)



