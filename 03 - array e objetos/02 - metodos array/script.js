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
console.log('incluindo o elemento 20: ', arr, x);
x = arr.indexOf(3);
console.log('posição 3: ', x);
x = arr.slice(3);
console.log('retirou os 3 primeiros elementos: ',x);
x = arr.slice(1, 4);
console.log('retirou o primeiro e o quarto elemento que havia no array: ', x);
x = arr.splice(3, 1);
console.log('splice: acredito que seja o elemento com o valor mais alto: ',x);
x = arr.splice(1, 4).toString().charAt(0);

//console.log(x, typeof(x), arr);
