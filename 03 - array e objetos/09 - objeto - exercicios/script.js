const library = [
    {
        title: 'Vamos pra vida',
        author: 'Angela',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Adriana',
        author: 'Encarando a vida',
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: 'Aproveitando a Vida',
        author: 'Rodrigo Júlio',
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
];

//exercicio 2

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

//exercicio 3

const { title: firstBook } = library[0];

console.log(firstBook);

//exercicio 4

const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);

