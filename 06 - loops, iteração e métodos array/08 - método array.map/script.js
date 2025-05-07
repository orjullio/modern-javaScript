const numeros = [1, 2, 3, 4, 5];
const dobro = numeros.map((numero) => numero * 2);  

console.log(dobro); // [2, 4, 6, 8, 10]

// O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array.
// O array original permanece inalterado.
// O método map() não altera o array original, ele cria um novo array com os resultados da função aplicada a cada elemento do array original.
// O método map() é útil quando você deseja transformar os elementos de um array em um novo array com base em alguma lógica.    
// O método map() é uma função de ordem superior, o que significa que ele aceita uma função como argumento.
// O método map() é uma função de array que itera sobre cada elemento do array e aplica uma função a cada elemento, retornando um novo array com os resultados.
// O método map() é uma função de array que não altera o array original, mas cria um novo array com os resultados da função aplicada a cada elemento do array original.
// O método map() é uma função de array que é útil quando você deseja transformar os elementos de um array em um novo array com base em alguma lógica.


//com forEach
const numeros2 = [];
numeros.forEach((numero) => {   
    numeros2.push(numero * 2);
    }       
);
console.log(numeros2); // [2, 4, 6, 8, 10]


// O método forEach() executa uma função para cada elemento do array, mas não retorna um novo array.
// O método forEach() não retorna um novo array, ele apenas executa uma função para cada elemento do array.     
// O método forEach() é útil quando você deseja executar uma função para cada elemento do array, mas não precisa de um novo array com os resultados.
// O método forEach() é uma função de array que itera sobre cada elemento do array e executa uma função para cada elemento, mas não retorna um novo array com os resultados.
// O método forEach() é uma função de array que não altera o array original, mas executa uma função para cada elemento do array original.
// O método forEach() é uma função de array que é útil quando você deseja executar uma função para cada elemento do array, mas não precisa de um novo array com os resultados.
// O método forEach() é uma função de array que não retorna um novo array, ele apenas executa uma função para cada elemento do array.
// O método forEach() é uma função de array que não altera o array original, mas executa uma função para cada elemento do array original.
// O método forEach() é uma função de array que é útil quando você deseja executar uma função para cada elemento do array, mas não precisa de um novo array com os resultados.
// O método forEach() é uma função de array que não retorna um novo array, ele apenas executa uma função para cada elemento do array.
// O método forEach() é uma função de array que não altera o array original, mas executa uma função para cada elemento do array original.
// O método forEach() é uma função de array que é útil quando você deseja executar uma função para cada elemento do array, mas não precisa de um novo array com os resultados.
// O método forEach() é uma função de array que não retorna um novo array, ele apenas executa uma função para cada elemento do array.
// O método forEach() é uma função de array que não altera o array original, mas executa uma função para cada elemento do array original.
// O método forEach() é uma função de array que é útil quando você deseja executar uma função para cada elemento do array, mas não precisa de um novo array com os resultados.
// O método forEach() é uma função de array que não retorna um novo array, ele apenas executa uma função para cada elemento do array.

const empresas = [
    { nome: 'Empresa 1', categoria: 'Tecnologia', lucro: 100000 },
    { nome: 'Empresa 2', categoria: 'Saúde', lucro: 50000 },
    { nome: 'Empresa 3', categoria: 'Educação', lucro: 200000 },
    { nome: 'Empresa 4', categoria: 'Tecnologia', lucro: 150000 },
    { nome: 'Empresa 5', categoria: 'Saúde', lucro: 80000 }
];
//criando um novo array com o nome das empresas
const nomesEmpresas = empresas.map((empresa) => empresa.nome);
console.log(nomesEmpresas); // ['Empresa 1', 'Empresa 2', 'Empresa 3', 'Empresa 4', 'Empresa 5']

//criando um novo array com o nome das empresas e o lucro
const nomesEmpresasELucro = empresas.map((empresa) => {
    return {
        nome: empresa.nome,
        lucro: empresa.lucro
    };
});
console.log(nomesEmpresasELucro); // [{ nome: 'Empresa 1', lucro: 100000 }, { nome: 'Empresa 2', lucro: 50000 }, { nome: 'Empresa 3', lucro: 200000 }, { nome: 'Empresa 4', lucro: 150000 }, { nome: 'Empresa 5', lucro: 80000 }]


//encadeando métodos
const raizQuadradoEDobro = numeros
    .map((numero) => Math.sqrt(numero))
    .map((numero) => numero * 2);   
console.log(raizQuadradoEDobro) // [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]

const raizQuadradoEDobro2 = numeros
    .map(function(numero) {
    return Math.sqrt(numero) * 2;
    })
    .map(function(numero) { 
    return numero * 2;
    }
);
console.log(raizQuadradoEDobro2) // [1, 1.4142135623730951, 1.7320508075688772, 2, 2.23606797749979]
// O método map() pode ser encadeado com outros métodos de array, como filter() e reduce(), para realizar operações mais complexas em arrays.

//encadeando métodos diferentes
const numerosFiltrados = numeros
    .filter((numero) => numero > 2)
    .map((numero) => numero * 2);
console.log(numerosFiltrados); // [6, 8, 10]
