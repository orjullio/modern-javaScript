//use alguns métodos array para alteração de [1, 2, 3, 4, 5] 
//para[6, 5, 4, 3, 2, 1, 0]

let x;
const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.unshift(0);
arr.reverse();
x = arr;

console.log(x);

//arr1 e arr2 num novo array arr3 formando [1,2,3,4,5,6,7,8,9,10]

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

//solucao 1
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3);

//solucao 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);

console.log(arr4);

