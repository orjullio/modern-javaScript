function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
    

}

//novo elementopara inserir
const li = document.createElement('li');
li.textContent = 'me inseri depois do terceiro item';

//elemento existente para inserir depois
const firstItem = document.querySelector('li:nth-child');

//nossa função customizada
insertAfter(li, firstItem);
