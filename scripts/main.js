
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
let list = document.getElementById('list');

function addToList() {
    let item = document.getElementById('userInput').value;
    let itemEntry = document.createElement('li');

    let price = document.getElementById('itemPrice').value;
    let priceEntry = document.createElement('li');

    if (item.length >= 2 && price >= 0) {
        itemEntry.appendChild(document.createTextNode(item));
        list.appendChild(itemEntry);
        priceEntry.appendChild(document.createTextNode(price));
        list.appendChild(priceEntry);
    }

    document.getElementById('userInput').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('userInput').focus();
}

*/