
let i = 0;

while(i <= 20){
    console.log('Número ' + i);
    i++;
}

// Exemplo de loop com array
let j = 0
const frutas = ['maçã', 'banana', 'laranja', 'uva'];
 while(j < frutas.length){
    console.log('Fruta: ' + frutas[j]);
    j++;
 }    


//exemplo while loop aninhado  

let k = 0;
while(k <= 10){
    console.log('tabuada de: ' + k);
    let l = 0;
    while(l <= 10){
        console.log(`${k} * ${l} = ${k*l}`);
        l++;
    }
    k++;
}

// Exemplo de loop faça enquanto
let m = 0;

do{
    console.log('Exemplo de faça enquanto menor ou igual a 20: ' + m);
    m++;
}while(m <= 20);

// Exemplo de loop faça enquanto com array