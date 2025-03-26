// || = determina que se a primeira condição for falsa, a segunda será

let a = false;
if(!a){
    a = 10;
}
//a = a || 10;
a ||= 10;

console.log(a);

//&& = determina que se a primeira condição for verdadeira, a segunda será

let b = 20;

if(b){
    b = 20;
}
b = b && 20;
b &&= 20;
console.log(b);

// ??= determina que se a primeira condição for nula ou indefinida, a segunda será

let c = null;
if(c === null || c === undefined){
    c = 30;
}

c = c ?? 30;
c ??= 30;

console.log(c);