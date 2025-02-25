//introduçao ao JSON
const post = {
    id: 1,
    titulo: 'Primeira Postagem',
    corpo: 'Esse é o corpo da mensagem'
};

//convertendo para uma string JSON
const str = JSON.stringify(post);
console.log(str);


//PARSE JSON
const obj = JSON.parse(str);
console.log(obj);

const postagens = [
    {
        id: 1,
        titulo: 'Postagem número 1',
    },
    {
        id: 2,
        titulo: 'Postagem número 2',
    }
];
console.log(postagens);

const str2 = JSON.stringify(postagens);
console.log(str2);
