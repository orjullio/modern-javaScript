let x;

const frutas = ['banana', 'goiaba', 'jabuticaba', 'melancia'];

const deVerao = ['uva', 'manga', 'amendoa', 'maçã'];

frutas.push(deVerao);

x = frutas[4];
x = frutas[4][1];

const todasFrutas = [frutas, deVerao];
x = todasFrutas;
x = todasFrutas[1][0];
x = frutas.concat(deVerao);

//Spread Operator

x = [...frutas, ...deVerao];

//arrays

const arr = [1, 2, [3, 4], 5, 6, [7, 8], 9];
x = arr.flat();

//métodos estáticos no objeto array
x = Array.isArray(frutas);
x = Array.from('1234567890');
x = Array.from('chocolate');

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);