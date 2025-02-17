const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

//obtendo a soma
const sum = x + y;
const sumSaida = `${x} + ${y} = ${sum}`;
console.log(sumSaida);

//obtendo a diferença
const diff =  x - y;
const diffSaida = `${x} - ${y} = ${diff}`
console.log(diffSaida);

//produto 
const produto = x * y;
const produtoSaida = `${x} * ${y} = ${produto}`;
console.log(produtoSaida);

//quociente
const quociente = x /y;
const quocienteSaida = `${x} / ${y} = ${quociente}`;
console.log(quocienteSaida);

//resto
const resto = x % y;
const restoSaida = `${x} % ${y} = ${resto}`;
console.log(restoSaida);