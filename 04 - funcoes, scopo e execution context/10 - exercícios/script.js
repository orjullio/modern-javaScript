//crie a função obter celcius

function getCelcius(f){
    const celsius = (f - 32) * 5/9;
    return celsius;
}

console.log(getCelcius(90));


//arrow function

const segundoGetCelcius = (f) => ((f - 32) * 5) /9;
console.log(`A temperatura é ${segundoGetCelcius(150)}`);


//segundo exercício.
//mínimo e máximo de um array

function minMax(arr){
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    return{
        min, max,
    };
} 

console.log(minMax([1,2,33,4,5,6,7,88,9,0]));

//IIFE com a área de um retangulo

((largura, altura) => {
    const area = largura * altura;

    const saida = `a area de um retangulo é de largura ${largura} e a altura ${altura}, é ${area}.`;

    console.log(saida)
})(5, 50);