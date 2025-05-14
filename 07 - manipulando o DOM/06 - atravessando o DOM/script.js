//obter elementos filho

const parent = document.querySelector('.parent');
output = parent.children;
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'child 2 alterado';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'primeiro filho alterado';
parent.lastElementChild.innerText = 'último filho alterado';

//obtendo parametro pai de um elemento um filho
const child = document.querySelector('.child');
output = child.parentElement; 
child.parentElement.style.border = '2px solid #ccc';
child.parentElement.style.padding = '10px';

//elementos irmãos

const segundoItem = document.querySelector('.child:nth-child(2)');

output = segundoItem.previousElementSibling; //anterior
output = segundoItem.nextElementSibling; //próximo

segundoItem.nextElementSibling.style.color = 'blue';
segundoItem.previousElementSibling.style.color = 'green';


console.log(output);


