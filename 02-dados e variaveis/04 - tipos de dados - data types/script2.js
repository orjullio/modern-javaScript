//stack e heap

//valores armazenados no stack
let nome = 'Ângela Aguiar';
let idade = 1;

//valores armazenados no heap
const pessoa = {
    nome: 'Adriana',
    idade: 39
};

let novoNome = nome;
novoNome = 'Preta Gil';

let novaPessoa = pessoa;
novaPessoa.nome = 'Ângela Aguiar';

console.log(nome, novoNome);
console.log(pessoa, novaPessoa);
    



