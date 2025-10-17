const pessoa = {
    nome: 'Amelia',
    idade: 25,
    pets: ['iguana'],
    nacionalidade: 'Francesa'
}

// for in
for (const obj in pessoa){
    console.log("chave",  obj)
    console.log("valor:", pessoa[obj])
}