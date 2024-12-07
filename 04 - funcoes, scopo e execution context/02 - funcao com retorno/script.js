// funcao com retorno


function subtract(num1, num2) {
    return num1 - num2;
}

const result = subtract(10, 2);
console.log(result, subtract(15, 5));



//Parametros Rest

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total
}
console.log(sum(1, 2, 3, 4, 5, 6));  


// objetos como parametros

function loginUser(user) {
    return `O usuário ${user.nome} de id ${user.id} está logado.`
}

const user = {
    id: 1,
    nome: 'Ângela',
};

console.log(loginUser(user));
console.log(
    loginUser({
        id: 2,
        nome: 'Adriana',
    })
);

//Arrays como parametro

function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex]

    console.log(item);
}

getRandom(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)