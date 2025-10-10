function saudacao (){
    console.log('E aí, beleza?')
}

//setTimeout(saudacao, 9000)

let contador = 0

const id = setInterval(() => {
    contador++
    console.log(`${contador} segundos`)
    if (contador == 10){
        clearInterval(id)
    }
}, 1000)