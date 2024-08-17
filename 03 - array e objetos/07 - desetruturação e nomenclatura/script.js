const primeiroNome = 'Adriana';
const segundoNome = 'Ângela';
const idade = 39;

const pessoa = {
    primeiroNome: primeiroNome,
    segundoNome: segundoNome,
    idade: idade
};

console.log(pessoa.idade);


//desestruturando

const livro = {
    id: 1,
    titulo: 'Livro Novo',
    usuario: {
        nome: 'Preta Gil',
    }
};

const {id, titulo, usuario:{nome},} = livro

console.log(livro);

// desestruturando arrays

const numeros = [23, 34, 45, 67, 89];

const [primeiro, segundo, ...rest] = numeros;
console.log(primeiro, segundo);

console.log(primeiro, segundo, ...rest);




