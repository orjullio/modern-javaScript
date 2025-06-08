/** 

window.onload = function () {
    document.querySelector('h1').textContent = 'Eventos de Mouse e Teclado';
}

window.addEventListener('load', () => document.querySelector('h1').textContent = 'Eventos de Mouse e Teclado');
*/


window.addEventListener('load', () => console.log('pagina carregada'));
window.addEventListener('DOMContentLoaded', () => console.log('DOM carregado'));

window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Remanejado o tamanho para ${window.innerWidth} x ${window.innerHeight}`;
});


window.addEventListener('scroll', () => {
    document.querySelector('h1').innerText = `Rolando a página para ${window.scrollX} x ${window.scrollY}`;

    if(window.scrollY > 70) {
        document.querySelector('h1').style.color = 'red';
    }else {
        document.querySelector('h1').style.color = 'black';
    }
});

window.addEventListener('focus', () => {
    document.querySelector('p').forEach((p) => {
        p.style.color = 'black';
    });
});