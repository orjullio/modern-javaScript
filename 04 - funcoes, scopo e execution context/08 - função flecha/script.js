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

//subtração
const subtracao = (a,b) => a - b;
console.log(subtracao(7, 9));
