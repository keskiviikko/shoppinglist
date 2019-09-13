
let shoppingList = document.getElementById('list');
let userInput = document.getElementById('inputItem');
let itemPrice = document.getElementById('inputPrice');

let shoppingListArr = [];

userInput.focus();

document.getElementById('addBtn').addEventListener('click', function () {
    let newItem = userInput.value.trim();
    let newPrice = parseInt(itemPrice.value);
    let newItemAndPrice = [newPrice, newItem];

    if (newItem && newPrice) {
        shoppingListArr.push(newItemAndPrice);
        for (var i = 0; shoppingListArr[i]; i++) {
            var liElement = document.createElement('li');
            liElement.innerText = newItem + ', ' + newPrice + '€';
        }
        shoppingList.appendChild(liElement);
    } else {
        alert('Kirjoita tarvitsemasi tuote ja hinta.');
    }

    userInput.value = '';
    itemPrice.value = '';
    userInput.focus();

    let sortedArray = shoppingListArr.sort(function (a, b) {
        return a[0] - b[0];
    });
    console.log(sortedArray);
});

let input = document.getElementById('inputPrice');
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('addBtn').click();
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