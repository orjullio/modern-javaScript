const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(function (numero) { 
    return numero % 2 === 0;
});

console.log(numerosPares); // [2, 4, 6, 8, 10]


// Exemplo 2

const numerosParesRapido = numeros.filter(numero => numero % 2 === 0);
console.log('forma rápida: ',numerosParesRapido); // [2, 4, 6, 8, 10]

// Exemplo 3

let numerosPares2 = []; 
numeros.forEach((numero) => {
    if (numero % 2 === 0) {
        numerosPares2.push(numero);
    }
});
console.log('Exemplo 3: ', numerosPares2); // [2, 4, 6, 8, 10]

// Exemplo 4

const empresas = [
    { nome: 'Google', categoria: 'Tecnologia', inicio: 1998, fim: 2023 },
    { nome: 'Apple', categoria: 'Tecnologia', inicio: 1976, fim: 2023 },
    { nome: 'Banco do Brasil', categoria: 'Financeiro', inicio: 1808, fim: 2023 },
    { nome: 'Itaú', categoria: 'Financeiro', inicio: 1945, fim: 2023 },
    { nome: 'Ambev', categoria: 'Alimentos', inicio: 2000, fim: 2008 },
    { nome: 'Nestlé', categoria: 'Alimentos', inicio: 1866, fim: 2022 },
    { nome: 'Coca-Cola', categoria: 'Bebidas', inicio: 1886, fim: 2005 },
    { nome: 'PepsiCo', categoria: 'Bebidas', inicio: 1965, fim: 2000 }
];
const empresasFinanceiras = empresas.filter((empresa) => {
    return empresa.categoria === 'Financeiro';
});
console.log('Empresas Financeiras: ', empresasFinanceiras); // [{ nome: 'Banco do Brasil', categoria: 'Financeiro' }, { nome: 'Itaú', categoria: 'Financeiro' }]    

//incicio depois de 1998 e fim antes de 2010

const empresasNovas = empresas.filter(
    (empresa) => empresa.inicio >= 1998 && empresa.fim <= 2023,
);
console.log('Empresas Novas: ', empresasNovas); // [{ nome: 'Ambev', categoria: 'Alimentos' }]

//empresas que terminaram em 10 ou mais anos

const empresasAntigas = empresas.filter(
    (empresa) => empresa.fim - empresa.inicio >= 10,
);  

console.log('Empresas Antigas: ', empresasAntigas); // [{ nome: 'Banco do Brasil', categoria: 'Financeiro' }, { nome: 'Itaú', categoria: 'Financeiro' }, { nome: 'Nestlé', categoria: 'Alimentos' }, { nome: 'Coca-Cola', categoria: 'Bebidas' }]