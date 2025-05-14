//document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.querySelector('app-title').id);
console.log(document.querySelector('app-title').className);
console.log(document.querySelector('app-title').getAttribute('id'));

//atribuir

document.getElementById('app-title').title = 'Novo título';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');
console.log(title);
console.log(title.textContent);

//obter/mudar conteúdo

title.textContent = 'Olá mundo!';
title.innerText = 'Olá mundo novamente!';
title.innerHTML = '<strong>Olá mundo!</strong>';
title.style.borderRadius = '10px';

//document.querySelector();

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const segundoItem = document.querySelector('li:nth-child(2)');
segundoItem.innerText = 'Novo texto';
segundoItem.style.color = 'red';    

//usar esses métodos em outros elementos

const list = document.querySelector('ul');
console.log(list);
const primeiroItem = list.querySelector('li');
