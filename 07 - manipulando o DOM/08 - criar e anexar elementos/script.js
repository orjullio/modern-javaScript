const div = document.createElement('div');
div.className = 'meu-elemento';
div.id = 'meu-id';  
div.setAttribute('title', 'Meu título');

//div.innerText = 'Olá Mundo!';    

const text = document.createTextNode('Olá Mundo!');
div.appendChild(text); // Adiciona o texto dentro da div

//document.body.appendChild(div); // Adiciona a div ao body

document.querySelector('ul').appendChild(div); // Adiciona a div a uma lista não ordenada


console.log(div); // <div></div>
