const logo = document.querySelector('h1');

const onClickDuplo = () => {
    document.body.style.backgroundColor = 'red';
}

const onClick = () => console.log('Clicou no logo!');
const onRightClick = () => console.log('Clicou com o botão direito!');
const onMouseDown = () => console.log('mouse se movimentou para baixo!');
const onMouseUp = () => console.log('mouse se movimentou para cima!');
const onMouseWheel = () => console.log('evento mouser wheel!');
const onMouseOver = () => console.log('mouse se movimentou para cima!');
const onMouseOut = () => console.log('mouse se movimentou para fora!');
const onMouseStart = () => console.log('mouse se movimentou para dentro!');
const onDrag = () => console.log('mouse se movimentou arrastando!');
const onDragEnd = () => console.log('mouse se movimentou arrastando para fora!');
const onDragStart = () => console.log('mouse se movimentou arrastando para dentro!');
const onDragOver = () => console.log('mouse se movimentou arrastando para cima!');
const onDragLeave = () => console.log('mouse se movimentou arrastando para fora!');
const onDragEnter = () => console.log('mouse se movimentou arrastando para dentro!');
const onDragDrop = () => console.log('mouse se movimentou arrastando para baixo!');


//ouvindo eventos
logo.addEventListener('click', onClick);
logo.addEventListener('dbclick', onClickDuplo);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouveover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('mouseover', onMouseStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('dragover', onDragOver);
logo.addEventListener('dragleave', onDragLeave);
logo.addEventListener('dragenter', onDragEnter);
logo.addEventListener('dragdrop', onDragDrop);
