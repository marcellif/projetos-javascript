const numeroUm = 4
const numeroDois = 8


const subtracao = numeroUm - numeroDois
const soma = numeroUm + numeroDois
const multiplicacao  = numeroUm * numeroDois
const divisao = numeroUm / numeroDois

console.log(`a divisão de ${numeroUm} por ${numeroDois} é ${divisao}`)

const contaComplexa = (numeroUm + numeroDois) * numeroDois

console.log('conta complexa: ', contaComplexa)

// traz o retso de uma divisão, importante se quiser saber se é par ou impar, numeros pares retornam 0 na divisão por 2
let numeroParaResto = 12
let resto = numeroParaResto % 2

/*                 if resto = 0 {
                    console.log('o numero é par')
                }
                else{
                    console.log('o numero é impar')
                }

                console.log(resto)
 */

// como incrementar e decrementar

let contador = 5
contador ++
contador ++
console.log('contador incrementado',contador)
contador --
console.log('contador decrementado', contador)

// multiplicando um número por ele mesmo x vezes (dá pra fazer com todas as operações)
let numeroTres = 2
numeroTres *= 2
console.log('Número multiplicado por ele mesmo', numeroTres)


// potência - elevado ao cubo
const potencia = 2 ** 3
console.log('potencia: ', potencia)

