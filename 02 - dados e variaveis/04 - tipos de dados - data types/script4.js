//Operadores

let x;
x = 5; 
x = x + '5';

console.log(x, typeof x);

x = 2 + Number(10);
console.log(x, typeof x);

x = 5 * '8';
console.log(x, typeof x);

x = 5 + null;
console.log(x, typeof x);

x = Number(null);
console.log(x, typeof x);

x = Number(true);

console.log(x, typeof x);

x = 5 + true;
console.log(x, typeof x);

x = 5 + false; 
console.log(x, typeof x);

x = 5 + undefined;
console.log(x, typeof x);