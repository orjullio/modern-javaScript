//função registrar usuário
function registrarUsuario(usuario){
    if(!usuario){
        usuario = 'É um Bot!';
    }

    return usuario + ' está registrado';
}
console.log(registrarUsuario('Ângela'));


//Parametros Rest
function soma(...numeros){
    return numeros;
}
console.log(soma(1,2,3,4,5,6)); // criou um array

function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 55));  


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