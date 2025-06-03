const logo = document.querySelector('img');

/*
function onClick(e) {
    // e.target é o elemento que disparou o evento
    console.log('O evento foi disparado pelo elemento:', e.target);
};
*/

logo.addEventListener('click', function (e) {
    // e.target é o elemento que disparou o evento
    console.log('O evento foi disparado pelo elemento:', e.target);
  
    // e.currentTarget é o elemento que está ouvindo o evento
    console.log('O evento está sendo ouvido por:', e.currentTarget);
  
    // e.type é o tipo do evento
    console.log('Tipo do evento:', e.type);
  
    // e.timeStamp é o tempo em que o evento foi disparado
    console.log('Timestamp do evento:', e.timeStamp);
}); 



logo.addEventListener('click', onClick);
// Função para lidar com o evento de clique 
logo.addEventListener('escorregar', onDrag);
// Função para lidar com o evento de arrastar 

