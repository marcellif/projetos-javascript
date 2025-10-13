const readline = require('readline');

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Qual é o seu nome? ', (nome) =>{
    console.log(`Olá ${nome}`);
    console.log(`Seja muito bem vindo!`);


    leitor.question('Qual é a sua idade? ', (idade) =>{
        if(idade >= 18){
            console.log(`O usuário ${nome} é maior de idade e pode dirigir`)
        }else{
            console.log(`O usuário ${nome} é menor de idade e não está apto a dirigir`)
        }
        leitor.close();
        })
    })
    


