
let shoppingList = document.getElementById('list');
let userInput = document.getElementById('input');
let itemPrice = document.getElementById('price');
let shoppingListArr = [];

document.getElementById('add').addEventListener('click', function() {
    let newItem = userInput.value.trim();
    let newPrice = itemPrice.value.trim();
    let newItemAndPrice = [newItem, newPrice];

    if (newItem && newPrice) {
        shoppingListArr.push(newItemAndPrice);
        for (var i=0; shoppingListArr[i]; i++) {
            var liElement = document.createElement('li');
            liElement.innerText = shoppingListArr[i] + '€';
        }
        shoppingList.appendChild(liElement);
    } else {
        alert('Kirjoita tarvitsemasi tuote ja hinta.');
    }
    userInput.value = '';
    itemPrice.value = '';
    userInput.focus();

    console.log(shoppingListArr);
});

let input = document.getElementById('input');
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('add').click();
    }
});

/*
This the previous code that I was using
Left it here for shits and giggles

let shoppingList = document.getElementById('list');

function addToList() {
    let item = document.getElementById('input').value;
    let itemEntry = document.createElement('li');

    let itemPrice = document.getElementById('price').value;
    let priceEntry = document.createElement('li');

    if (item.length >= 1 && itemPrice >= 0) {
        itemEntry.appendChild(document.createTextNode(item));
        shoppingList.appendChild(itemEntry);
        priceEntry.appendChild(document.createTextNode(itemPrice));
        shoppingList.appendChild(priceEntry);
    }

    document.getElementById('input').value = '';
    document.getElementById('price').value = '';
    document.getElementById('input').focus();
}
*/