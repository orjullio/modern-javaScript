/*
            valores falsos
false
0
"" or  '' ou `` string vazia
null
undefined
NaN

        valores verdadeiros
tudo o que não é falso
true
'0' (0 em string)
' ' (string com espaço)  
[] array vazio
{} objeto vazio
function(){} função vazia
*/

const x = [];

if (x) {
    console.log('Isso é verdadeiro!');
}   else {
    console.log('Isso é falso!');
}

console.log(Boolean(x));

//      advertencias entre verdadeiro e falso

const y = 2;

if (!isNaN(y)) {    
    console.log(`Temos ${y}. Isso é verdadeiro!`);
}else{
    console.log('Isso é falso!');
}

//     checando operadores vazios

//const postagens = ['Postagem um', 'Postagem dois', 'Postagem três'];
const postagens = [];

if (postagens.length) {
    console.log('Existe postagens!');
}else{
    console.log('Não existe postagens!');
}

//     checando objetos vazios  

const pessoa = {
    nome: 'Lucas'
};

if(pessoa){
    console.log('Existe pessoa!');
}else{
    console.log('Não existe pessoa!');
}

if(Object.keys(pessoa).length > 0){
    console.log('Existe pessoa!');
}
else{
    console.log('Não existe pessoa!');
}   

// perda de equidade(==) e identidade(===)

console.log(0 == false);
console.log('0' == false);
console.log(' ' == false);
console.log(1 == true);
console.log(2 == true);
console.log('2' == true);