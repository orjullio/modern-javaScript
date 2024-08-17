//introduçao ao JSON
const post = {
    id: 1,
    titulo: 'Primeira Postagem',
    corpo: 'Esse é o corpo da mensagem'
};

//convertendo para uma string JSON

const str = JSON.stringify(post);

//PARSE JSON

const obj = JSON.parse(str);

console.log(str);