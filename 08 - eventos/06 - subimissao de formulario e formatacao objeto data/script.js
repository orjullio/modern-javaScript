const form = document.querySelector('formulario');

function onsubmit(e) { 
    e.preventDefault(); // Evita o envio do formulário
   

    const formulario = document.getElementById('formulario').value;
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if(formulario === '' || nome === '' || email === '') {
        alert('Preencha todos os campos!');
        return;
    }

    console.log(formulario, nome, email);
}


//usando formulário com data e hora
function submeter(e){
    e.preventDefault(); // Evita o envio do formulário
    console.log('Formulário enviado');

    const data = new Date();
    const dia = data.getDate();
    const mes = data.getMonth() + 1; // Meses começam do zero
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
}

formulario.addEventListener('submit', onsubmit); 