let x;
const arr = [3, 7, 13, 20, 81, 14, 55, 8];

arr.push(100);
arr.pop();
arr.unshift(38);
arr.shift();
//arr.reverse();

x = arr.includes(20);
x = arr.indexOf(3);
x = arr.slice(3);
x = arr.slice(1, 4);
x = arr.splice(3, 3);
x = arr.splice(1, 4).toString().charAt(0);

console.log(x, typeof(x), arr);
