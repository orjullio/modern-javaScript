//alert("Olá!");
//console.log(innerWidth);

const x = 100;
console.log(x, "no escopo global");

function executar() {
  console.log(window.innerHeight);
  console.log(x, "na função!");
}

executar();

if (true) {
  console.log(x, "no bloco");
}

function add() {
  const y = 50;
  console.log(y);
}

add();
