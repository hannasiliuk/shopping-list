/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const groceriest = document.querySelector('.groceries');
const items = document.querySelector('.items');
const secondInput = document.querySelector('#input');


function addItem() {
    let item = document.createElement('p');
    item.textContent = '-' + secondInput.value;



    item.addEventListener('click', function() {
        item.classList.toggle('done');
    });


    const text = secondInput.value;
    if (text != '') {
        items.append(item);

        secondInput.value = '';

    };
};

secondInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter')
        addItem();
});