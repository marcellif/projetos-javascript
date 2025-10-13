const readline = require('readline');

const ler = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let pontos = 0;
let nomeInformado = "";



ler.question('Qual é o seu nome? \n >', (nome) =>{
    nomeInformado = nome
    console.log(`Olá ${nomeInformado}`);
    console.log(`Seja muito bem vindo ao quiz de herois!`);
    console.log('Responda com o número correspondente - 1, 2 ou 3:\n');
    
ler.question('Qual heroi possui o batmóvel \n 1)Aquaman \n 2)Homem Aranha \n 3)Batman \n > ' , (retorno1) =>{
        if(retorno1 == '3'){
            pontos++
        }

    ler.question('Qual desses herois não usa capa \n 1)Mulher Maravilha \n 2)Super Homem \n 3)Batman \n >' , (retorno2) =>{
        if(retorno2 == '1'){
            pontos++
        }

    ler.question('Qual o poder do Hulk? \n 1)Invisibilidade \n 2)Força \n 3)Visão raio-x \n >' , (retorno3) =>{
        if(retorno3 == '2'){
            pontos++
        }

    ler.question('Qual o homem aranha original? \n 1)Tobey Maguire \n 2)Tom Holland \n 3)Andrew Garfield \n >' , (retorno4) =>{
        if(retorno4 == '1'){
            pontos++
        }
        
        if (pontos === 4){
            console.log(`Parabens ${nomeInformado}, você acertou tudo!`)
        }else if(pontos === 3){
            console.log(`Parabens ${nomeInformado}, você acertou 3 perguntas!`)
        }else if(pontos === 2){
            console.log(`Você acertou 2 perguntas, ${nomeInformado}!`)
        }else if(pontos === 1){
            console.log(`Você acertou apenas 1 pergunta, ${nomeInformado}!`)
        }else{
            console.log(`Infelizmente ${nomeInformado}, você não acertou nenhuma!`)
        }

        ler.close();
    })
    })
    })
    })
})
    



