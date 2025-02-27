const x = 100;
const foo = 1;
var bar = 2;

//bloco onde a soma pega um const que é um elemento externo
//e y que é um element interno dentro desse escopo.
if(true){
    const y = 200;
    console.log(x + y);
}

//exemplo simples de loop
// let i só é válido dentro do loop
for(let i = 0; i <= 10; i++){
    console.log(i);
}


if (true){
    const a = 500;
    let b = 600;
    var c = 700;
}
//console.log(a); não imprime a const a, que está dentro de um escopo
//console.log(b); não imprime let b, pq está dentro de um escopo
console.log(c);// imprime a variável c mesmo dentro do escopo

function executar(){
    var d = 100;
    console.log(d);
}
executar();//executou o que há dentro do escopo
//console.log(d);//não consegue encontrar a variável d