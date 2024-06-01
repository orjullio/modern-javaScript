//Trabalhanco com números
let x;
const num = new Number(5.490332123);
x = num.toString()
console.log(x, typeof(x));

x = num.toString().length
console.log(x,  typeof(x));

x = num.toFixed(2); //decimal
console.log(x, typeof (x));

x = num.toPrecision(3); // quantidade de casas decimais.
console.log(x, typeof (x));

x = num.toExponential(2) //trabalha com e+
console.log(x, typeof (x));

x = num.toLocaleString('pt-BR');
console.log(x, typeof (x));

console.log(num);

num.valueOf();
console.log(num);

x = Number.MAX_VALUE;
console.log(x);
x = Number.MIN_VALUE;
console.log(x)