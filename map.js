// além de percorrer o array, o, map retorna uma nova lista com o comando que for passado

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const quadrado = numeros.map((num)=>{
    return num * num
})



const raiz = quadrado.map((n)=>{
    return n ** 0.5
})

console.log(raiz)
