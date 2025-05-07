const pessoas = [
    {nome: "Lucas", sobrenome: "Silva", idade: 25, },
    {nome: "Ana", sobrenome: "Souza", idade: 30, },
    {nome: "Marcos", sobrenome: "Oliveira", idade: 28, },
    {nome: "Fernanda", sobrenome: "Pereira", idade: 22, },
    {nome: "Juliana", sobrenome: "Lima", idade: 35, },
    {nome: "Carlos", sobrenome: "Santos", idade: 40, },
    {nome: "Roberta", sobrenome: "Almeida", idade: 27, },
    {nome: "Ricardo", sobrenome: "Costa", idade: 32, },
]

const pessoasComIdadeMaiorQue30 = pessoas
    .filter(pessoa => pessoa.idade <= 25)
    .map((pessoa => ({ 
        nome: pessoa.nome,
        sobrenome: pessoa.sobrenome,
        idade: pessoa.idade
    })));
console.log(pessoasComIdadeMaiorQue30);

const numeros = [2, -30, 5, 10, -1, 0, 3, -4, 8, -2];
const numerosPositivos = numeros
    .filter(numero => numero > 0)
    .reduce((acumulador, atual) => acumulador + atual, 0);
console.log(numerosPositivos);

const numerosNegativos = numeros
    .filter(numero => numero < 0)
    .reduce((acumulador, atual) => acumulador + atual, 0);
console.log(numerosNegativos);

const palavrasComc = ["cachorro", "gato", "elefante", "cavalo", "girafa", "leão", "tigre"];
const palavrasComC = palavrasComc
    .filter(palavra => palavra.startsWith("c"))
    .map(palavra => palavra.toUpperCase());
console.log(palavrasComC);
