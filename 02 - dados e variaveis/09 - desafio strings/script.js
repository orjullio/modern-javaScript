const myString = 'desenvolvedor';
let myNewString;

// solucção 1

myNewString = myString.charAt(0);
console.log(myNewString);

//soluçao 2
myNewString = myString.charAt(0).toUpperCase();
console.log(myNewString);

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString)

//solução 3
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;
console.log(myNewString);
