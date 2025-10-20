const agora =  new Date ()

console.log (agora)

// ano
console.log("Ano:", agora.getFullYear())

// mes de 0 a 11
console.log("Mês 0 - 11 :", agora.getMonth())


// mes corrigindo o array para ficar igual ao calendário
console.log("Mês do ano:", agora.getMonth()+1)


// dia do mês
console.log("Dia:", agora.getDate())


// hora e minutos
console.log('Hora:', agora.getHours())
console.log('Minutos:', agora.getMinutes())


// data especifica
const nascimento1 = new Date(1959, 6, 8)
console.log(nascimento1)

//trabalhando com o formato iso 8601 para evitar que a data seja modificada devido ao fuso horario diferente
const nascimento = new Date('1959-07-08T09:30:00.000Z')

// adaptando datas para diferentes localidades
console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'))
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US'))