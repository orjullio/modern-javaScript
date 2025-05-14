//querySelectorAll() - Seleciona todos os elementos que correspondem ao seletor CSS

const items = document.querySelectorAll('.item');
console.log(items); // NodeList(3) [div.item, div.item, div.item]
console.log(items[0]); // <div class="item">Item 1</div>

items.forEach((item, index) => {
    item.style.color = 'red';

    if(index === 1) {
        item.style.backgroundColor = 'blue';
    }

    if(index === 0) {
        item.innerHTML = 'green';
    }
});

  console.log(item); // <div class="item">Item 1</div> <div class="item">Item

  const lisItems2 = document.getElementById('items2');
  console.log(lisItems2[2].innerText); // Item 3

  const arrayListaItens = Array.from(lisItems2);

  listItemArray.forEach((item)=> {
    console.log(item.innerText);
  });

  