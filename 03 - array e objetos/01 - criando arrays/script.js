let x;

//Array Literal
const numeros = [3, 32, 44, 65, 98, 100];
console.log(numeros);

//Contrutor do Array
const frutas = new Array('pera', 'banana', 'tangerina');

//acessando dados no array
x = frutas[2];
x = numeros[2] + numeros[4];
x = `minha fruta favorita é ${frutas[2]}`;
x = numeros.length;
frutas[2] = 'maçã';
frutas[3] = 'uva';
frutas[12] = 'jamelao';
x = frutas
console.log(x);
