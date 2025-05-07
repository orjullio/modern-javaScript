const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const soma = numeros.reduce(function(acumulador, numeroAtual) {  
    return acumulador + numeroAtual;
}, 0);       
console.log(soma); // 55

const soma2 = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 10); 
console.log('soma com inicial 10: ',soma2); // 55

//usando um for loop
let soma3 = () => {
    let acumulador = 0;
    for (const atual of numeros) {
        acumulador += atual;
    }
    return acumulador;
}
console.log('soma com for loop: ',soma3()); // 55

const carrinho = [
    {id: 1, produto: 'sabão em pó', preco: 30},
    {id: 2, produto: 'detergente', preco: 10},  
    {id: 3, produto: 'desinfetante', preco: 20},
];

const totalCarrinho = carrinho.reduce((acumulador, item) => {
    return acumulador + item.preco;
}
, 0);
console.log('total carrinho: ', totalCarrinho); // 60
