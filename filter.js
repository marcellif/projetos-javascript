const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const numerosPares = numeros.filter((i) =>{
    return i % 2 === 0
})

const numerosImpares = numeros.filter((j) =>{
    return j % 2 != 0
})



console.log (`lista de números geral: ${numeros}`)
console.log (`lista de números pares: ${numerosPares}`)
console.log (`lista de números impares: ${numerosImpares}`)