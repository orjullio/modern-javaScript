//rápido e sujo

function createListItem(item) {
    const li = document.createElement('li');

    li.innerHTML = `${item}
    <button class="remove-item" btn-link text-red>
        <i class="fa-solid fa-xmark"></li>
    </button>`;

    document.querySelector('.items').appendChild(li);
} 



//limpo e performático

function createListItem(item) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const icon = document.createElement('i');

    li.textContent = item;
    button.classList.add('remove-item', 'btn-link', 'text-red');
    icon.classList.add('fa-solid', 'fa-xmark');

    button.appendChild(icon);
    li.appendChild(button);
    document.querySelector('.items').appendChild(li);
}
