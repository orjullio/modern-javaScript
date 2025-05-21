function remanejarPrimeiroElemento() {
    const primeiroElemento = document.querySelector('li:first-child');
    const li = document.createElement('li');
    li.textContent = 'me remanejei para o primeiro item';

  // Removendo o elemento do DOM
  elementoRemanejado.trocarCom(li);

}

function remanejarSegundoElemento() { 

    const segundoElemento = document.querySelector('li:nth-child(2)');

    segundoElemento.outerHTML = '<li>me remanejei para o segundo item</li>';
    //outra forma de fazer      
    const li = document.createElement('li');
    li.textContent = 'me remanejei para o segundo item';
  // Removendo o elemento do DOM
  elementoRemanejado.trocarCom(li);
}


function remanejarTodosOsElementos() {
    const lis = document.querySelectorAll('li');
    lis.forEach((item, index) => {
        if (index === 0) {
        item.innerHTML = 'Remanejei o primeiro elemento';
        } else {
            item.innerHTML = 'Remanejei o segundo elemento';
        }
        item.innerHTML = 'Remanejei todos os elementos';
    });

    lis.forEach((item, index) => item.outerHTML  = index === 1 ? '<li>Remanejei o primeiro elemento</li>' : '<li>Remanejei o segundo elemento</li>');
}

remanejarPrimeiroElemento();
remanejarSegundoElemento();
remanejarTodosOsElementos();