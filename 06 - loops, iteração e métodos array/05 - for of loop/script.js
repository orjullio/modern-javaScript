const itens = ['livro', 'carro', 'celular', 'computador', 'tablet'];
const usuarios = [
  { nome: "Lucas", idade: 25 },
  { nome: "Ana", idade: 30 },
  { nome: "João", idade: 22 },
    { nome: "Maria", idade: 28 },
];

for (const item of itens) {
  console.log(item);
}

for (const usuario of usuarios) {
  console.log('nome: ',usuario.nome, 'idade: ', usuario.idade);
}

//loop over string
const nome = 'Lucas';
for (const letra of nome) {
  console.log(letra);
}

//loop over map
const map = new Map();
    map.set('nome', 'Lucas');
    map.set('idade', 25);

for (const [chave, valor] of map) {
  console.log(chave, valor);
}
