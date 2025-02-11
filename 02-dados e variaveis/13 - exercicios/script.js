/**
 * Pegue a variável minhaString e transforme a primeira letra de da palavra em maiúscula.
 * usando métodos demonstrados nas aulas anteriores.
 * 
 * Podemos usar charAt() 
 */

const minhaString = 'desenvolvedor';
let minhaNovaString
//1 solução
minhaNovaString = minhaString.charAt(0).toUpperCase() + minhaString.substring(1);
console.log(minhaNovaString);

//2 
minhaNovaString = minhaString[0].toUpperCase() + minhaString.substring(1);
console.log(minhaNovaString);

//3
minhaNovaString = `${minhaString[0].toUpperCase()}${minhaString.slice(1)}`;
console.log(minhaNovaString)
