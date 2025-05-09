/*
console.log(window);
console.log(window.document);
console.log(document.body);
console.log(document.body.innerHTML);
console.log(document.body.innerText);
console.log(document.links);//funciona como um array
console.log(document.links[0]);

document.body.innerHTML = "<h1>Olá, Mundo!</h1>";//sobrescreve o conteúdo do body
console.log(document.body.innerHTML);

document.write("<h1>Olá do javaSript</h1>");//adiciona o conteúdo No body
*/
console.log(document.getElementById('main'));
const main = document.getElementById('main');
main.innerHTML = "<h1>Olá, Pessoas!</h1>";//sobrescreve o conteúdo do main

document.querySelector('#main h1').innerText = "Olá, Todo Mundo!";//altera o conteúdo do h1

