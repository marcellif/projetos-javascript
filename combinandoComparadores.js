const idade = 45
const maiorDeIdade = idade >=18
const possuiCnh = false

// And
const podeDirigir = maiorDeIdade && possuiCnh

console.log('pode dirigir?', podeDirigir)

// Ou ||
const podeViajarSozinha = maiorDeIdade || podeDirigir

console.log('pode viajar sozinha ?', podeViajarSozinha)


// negação ! - antes de uma verificação pra fazer ao contrário
const precisaDeAcompanhante = !maiorDeIdade

console.log('Precisa de acompanhante?', precisaDeAcompanhante)