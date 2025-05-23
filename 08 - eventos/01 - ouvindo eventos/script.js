
const limpar = document.querySelector("#limpar");

function onClick() {
    alert("Clicou no botão!");
}

/*
// Adicionando o evento de clique ao botão

limpar.onclick = function () {
    alert("Clicou no botão limpar!");
}

limpar.onclick = function () {
console.log("Clicou no botão limpar!");
    
//addEventListener 
limpar.addEventListener('click', alert('Limpar itens!!!'));    
    
*/

limpar.addEventListener('click', oncClick());

//setTimeout(() => limpar.click(), 5000);