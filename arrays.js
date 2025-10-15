const frutas = ['Uva', 'Banana', 'Kiwi', 'Maçã', 'Morango'];

frutas.push('Melão')

console.log('a primeira fruta é', frutas[0])

console.log(`total de frutas: ${frutas.length}`)

console.log (`a ultima fruta é ${frutas[frutas.length - 1]}`)

frutas.pop()

console.log(`Ultima fruta após remoção com pop: ${frutas[frutas.length - 1]}`)