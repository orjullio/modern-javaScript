// funçao básica

function digaOla() {
    console.log('Olá mundo!')
}
digaOla();

function add(num1, num2) {
    console.log(num1 + num2);
}

add(20, 3);

function subtracao(num1, num2){
    return num1 - num2;

    console.log('depois do retorno');
}
const resultado = subtracao(33, 4);
console.log(resultado);