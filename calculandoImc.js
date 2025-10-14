//Crie uma função que receba peso e altura e retorne o valor do IMC.
// Mostre também uma frase com o resultado.

let peso = 65
let altura = 1.70
let nome = 'Gabriela'


let imc = peso/(altura * altura)

let classificacao ="" 

if(imc <= 18.5) {
    classificacao = "Magreza ou Baixo Peso"
}else if (imc >= 18.5 && imc < 24.9 ){
    classificacao = "Peso Normal/Adequado"
}else if (imc >= 24.9 && imc < 29.9){
    classificacao = "Sobrepeso"
}else if (imc >= 30 && imc < 34.9){
    classificacao = "Obesidade Grau I"
}else if (imc >= 34.9 && imc <= 39.9){
    classificacao = "Obesidade Grau II"
}else{
    classificacao = "Obesidade Grau III"
}


console.log (`${nome}, seu imc atual é ${imc} e sua classificação é ${classificacao}`)
