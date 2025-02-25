const primeiroNome = 'Adriana';
const ultimoNome = 'Costa';
const idade = 39;

const pessoa = {
    primeiroNome: primeiroNome,
    ultimoNome: ultimoNome,
    idade: idade
};

console.log(pessoa.idade);


//desestruturando

const livro = {
    id: 1,
    titulo: 'Livro Novo',
    usuario: {
        nome: 'Preta Gil',
        tipo: 'cachorro doido',
    }
};

const {
    id, titulo,
    usuario:{nome},
} = livro

console.log(livro);
console.log(livro.id);
console.log(livro.titulo);
console.log(livro.usuario);

// desestruturando arrays

const numeros = [23, 34, 45, 67, 89];

const [primeiro, segundo, ...rest] = numeros;
console.log(primeiro, segundo);

console.log(primeiro, segundo, ...rest);




