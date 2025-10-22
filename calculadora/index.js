//modo de importação no tipo module
import{createInterface} from 'readline'
//importando as funções criadas no outro arquivo da pasta
import{soma, subtracao} from './operacoesMatematicas.js'

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question('Digite o primeiro numero\n ', (numero1) =>{
    
    leitor.question('Digite a operação\n +: soma\n -:subtração \n>', (operacao) =>{
    
        leitor.question('Digite o segundo número:\n>', (numero2) =>{
            const num1 = Number(numero1)
            const num2 = Number(numero2)
            let resultado = null

            if (operacao == '+'){
               resultado = soma (num1,num2)
            }else if(operacao == '-'){
                resultado = subtracao (num1,num2)
            }else{
                console.log("operação inválida!")
            }

            if (resultado != null){
                console.log('O resultado da operação é', resultado)
            }

            leitor.close();
        })
   
    })
})