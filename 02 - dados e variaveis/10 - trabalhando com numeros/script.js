let x;

const num  = new Number(5);
x = num.toString();

console.log(x);

x = num.toString().length;
console.log(x);

x = num.toFixed(2);
console.log(x);

x = num.toPrecision(3);
console.log(x);

x = num.toExponential(2);
console.log(x);

x = num.toLocaleString('en-US');
console.log(x);

x = num.valueOf();
console.log(x);

x = Number.MAX_VALUE;
console.log(x);
x = Number.MIN_VALUE;
console.log(x);