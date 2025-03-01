/*

função normal
function add(a, b){
    return a + b;
}

*/
// protege a função transformando-a numa constante. assim não altera
//adição
const add = (a, b) =>{
    return a + b;
};
console.log(add(1, 4));

//retorno implicito
const subtracao = (a,b) => a - b;
console.log(subtracao(7, 9));

//pode deixar sem () quando um parametro único
const dobro = a => a * 2;
console.log(dobro(15));

//retornando um objeto
const criandoObjeto = () =>({
    nome: 'Ângela',
});
console.log(criandoObjeto());

const numeros = [1,2,3,4,5,6]
numeros.forEach(function (n){
    console.log(n);
});

//arrow function em call back
numeros.forEach((n) => console.log(n));


