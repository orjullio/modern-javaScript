let x;

const todo = new Object();

todo.id = 1;
todo.nome = 'Ângela Aguiar';
todo.completo = false;

x = todo;

const pessoa = {
    endereco: {
        rua: 'Dr. Barros Júnior',
        numero: '1911'
    }
}

x = pessoa.endereco.rua

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };
x = obj3;

//diferente de

const obj4 = { ...obj1, ...obj2 };
x = obj4;

const obj5 = Object.assign({}, obj1, obj2);

const todos = [
    {
        id: 1,
        nome: 'Adriana da Silva Aguiar Costa'
        
    },
    {
        id: 2,
        nome: 'Rodrigo Júlio Costa'
        
    },
    {
        id: 3,
        nome: 'Ângela Aguiar Costa'
    }
];

x = todos[0].nome;

x = Object.keys(todo);


console.log(x);