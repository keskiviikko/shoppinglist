
let shoppingList = document.getElementById('list');
let userInput = document.getElementById('inputItem');
let itemPrice = document.getElementById('inputPrice');

let shoppingListArr = [];

userInput.focus();

document.getElementById('addBtn').addEventListener('click', function () {
    let newItem = userInput.value.trim();
    let newPrice = parseFloat(itemPrice.value).toFixed(2);
    let newItemAndPrice = [Number(newPrice), newItem];

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
