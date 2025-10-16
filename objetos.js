const pessoa ={
    nome: 'Paula',
    idade: 25,
    temCnh: true

}

pessoa.sobrenome = 'Freitas'

console.log('Nome: ', pessoa.nome);
console.log('Sobrenome: ', pessoa.sobrenome);


const livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
};

livro.publicado = true;
livro.idiomas = ['Inglês', 'Português', 'Espanhol'];

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log('Livro antes:', livro)
delete livro.paginas
console.log('Livro depois:', livro)


//Outra funcionalidade interessante é a forma de acessar propriedades. 
//Podemos fazer isso como livro.idiomas, 
//mas também podemos usar colchetes e strings para acessar, por exemplo, o autor.
console.log('Autor do livro', livro['autor'])

const autor = {
    nome: 'J R R Tolkien',
    nacionalidade: 'Britanico',
    idade: 98
}


livro.autor = autor

console.log('Livro final', livro)