const idade = 13;

const podeBeber = idade >= 18 ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

//determinando uma condicional com operador ternário

const auth = true;
let redirect = auth 
? (alert('bem vindo ao dashboard'), '/dashboard')
: (alert('Acesso negado'), '/login');

console.log(redirect);

auth ? console.log('Usuário logado') : console.log('Usuário precisa fazer login');
auth && console.log('Usuário logado');vive