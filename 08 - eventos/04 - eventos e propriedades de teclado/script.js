const itemInput = document.getElementById('item-input');

const onKeypress = e => { 
    console.log('keypress');
}

const onKeyUp = e => {
    console.log('keyup');
};
const onKeyDown = e => {
    console.log(e.key);
    document.querySelector('h1').innerText = e.key;
}

itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
itemInput.addEventListener('keypress', onKeypress);