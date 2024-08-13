let x;

const pessoa = {
    nome: 'Ângela Aguiar',
    idade: '2',
    isAdmin: true,
    endereco: {
        rua: 'Rua Dr. Barros Júnior',
        numero: '1911',
        complemento: 'Bloco 2 Apartamento, 211',
        bairro: 'Metrópole',
        cidade: 'Nova Iguaçu',
        estado: 'Rio de Janeiro'
    }
};
x = pessoa.nome;
x = pessoa.idade;
x = pessoa.endereco.rua;

delete pessoa.idade;
x = pessoa;

pessoa.saudacao = function () {
    console.log(`Olá! Meu nome é ${this.nome}`);
};

pessoa.saudacao();

x = pessoa;

console.log(x);