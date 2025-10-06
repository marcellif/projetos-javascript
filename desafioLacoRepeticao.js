//contar quantos numeros pares e numeros imparesnós temos entre 0 e 100


let totalNumerosPares = 0;
let totalNumerosImpares = 0; 

// laço de repetição

let conjuntoDeNumeros = 0
while (conjuntoDeNumeros <= 100) {
    if(conjuntoDeNumeros % 2 == 0){
        totalNumerosPares ++ 
    }else{
        totalNumerosImpares ++ 
    }
    conjuntoDeNumeros++;
}

console.log (`Total de numeros pares: ${totalNumerosPares}`)
console.log (`Total de numeros impares: ${totalNumerosImpares}`)