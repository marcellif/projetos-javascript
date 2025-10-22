const frutas = ["banana", "maçã", "goiaba"]

const maisFrutas = ["uva", "morango", "kiwi"]

const clone = [...frutas]

//spread no array
const todasAsFrutas = [...frutas, ...maisFrutas]

frutas.push("pitanga")

console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasAsFrutas)


// rest no array - separando alguns itens do array
const [primeira,segunda, ...restanteArray] = todasAsFrutas

console.log(primeira)
console.log(segunda)
console.log(restanteArray)