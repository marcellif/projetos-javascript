// estrutura do laço de repetição for

for (let contador = 1; contador <= 10; contador ++){
    console.log(`O número atual é: ${contador}`)
}

// for com condição - números pares

for (let numero = 0; numero <= 8; numero ++){
   if(numero % 2 == 0){
    console.log(`achei numero par: ${numero}`)
   }
}

// for com condição - números impares
for (let numero = 0; numero <= 9; numero ++){
    if(numero % 2 != 0){
     console.log(`achei numero impar: ${numero}`)
    }
 }

// buscando no array uma posição e chamando no lao de repetição
let palavra = "calopsita";
 for (let contador = 0; contador < palavra.length; contador ++){
    console.log(palavra[contador])
 }