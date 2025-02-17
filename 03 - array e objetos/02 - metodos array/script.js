let x;
const arr = [3, 7, 13, 20, 81, 14, 55, 8];

arr.push(100);
console.log('adicionou o 100 ao array: ',arr);
arr.pop();
console.log('retirou o último elemento: ',arr);
arr.unshift(38);
console.log('colocou o elemento 38 no index 0 no grupo: ',arr);
arr.shift();
console.log('tirou o primeiro elemento (index 0) do array', arr);
arr.reverse();
console.log('inverteu a posição de todos os elementos: ',arr);


x = arr.includes(20);
console.log(x);
x = arr.indexOf(3);
x = arr.slice(3);
x = arr.slice(1, 4);
x = arr.splice(3, 3);
x = arr.splice(1, 4).toString().charAt(0);

console.log(x, typeof(x), arr);
