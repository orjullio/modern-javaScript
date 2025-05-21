function removeElement() {
    const botaoLimpar = document.querySelector("#botaoLimpar");
    botaoLimpar.remove();
}

function removerPrimeiroElemento() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

function removeItem(itemNumero) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumero})`);

    ul.removeChild(li);
}



removeElement();
removerPrimeiroElemento();
removeItem(2);