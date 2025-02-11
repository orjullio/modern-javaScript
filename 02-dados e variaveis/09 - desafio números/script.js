const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);
console.log(x, '', y);

const sum = x + y;

//obtendo a soma e mostrando os dados 
const sumSaida = `${x} + ${y} = ${sum}`;
console.log(sumSaida);

//obtendo a subtração
const diferenca = x - y;
const diferencaSaida = `${x} - ${y} = ${diferenca}`
console.log(diferencaSaida);

//obtendo a multiplicação
const mult = x * y;
const multSaida = `${x} * ${y} = ${mult}`;
console.log(multSaida);

//obtendo divisão
const divisao = x / y;
const divisaoSaida = `${x} / ${y} = ${divisao}`
console.log(divisaoSaida);

//obtendo o resto
const resto = x % y;
const restoSaida = `${x} % ${y} = ${resto}`;
console.log(restoSaida);