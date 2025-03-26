console.log(10 > 20 && 30 > 40 >30); // false
console.log(10 > 20 || 30 < 15); // false   

// && - irá retornar pmeiro valor falso que encontrar

let a;

a = 10 && 20; 
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a); // 0    

const postagens = ['postagem 1', 'postage 2']
postagens.length > 0 && console.log(postagens[0]); // true

// || - irá retornar o primeiro valor verdadeiro que encontrar

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b); //

// ?? - retorna o primeiro valor que não seja nulo ou undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c); // 10