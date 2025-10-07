// HOF --> Higher-order Function === runção que recebe outra função como parâmetro

function calcular (numero1, numero2, operacao){
    return operacao (numero1, numero2)
}


function soma (num1, num2){
    return num1 + num2
}

function subtracao (num1, num2){
    return num1 - num2
}

function multiplicacao (num1, num2){
    return num1 * num2
}

function divisao (num1, num2){
    return num1 / num2
}


let primeiroNum = 20
let segundoNum = 10

const resultadoSoma = calcular (primeiroNum, segundoNum, soma)
console.log(`O resultado da soma foi:  ${resultadoSoma}`)

const resultadoDivisao = calcular (primeiroNum, segundoNum, divisao)
console.log(`O resultado da divisao foi:  ${resultadoDivisao}`)

const resultadoMultiplicacao = calcular (primeiroNum, segundoNum, multiplicacao)
console.log(`O resultado da divisao foi:  ${resultadoMultiplicacao}`)