
let shoppingList = document.getElementById('list');
let itemName = document.getElementById('inputItem');
let itemPrice = document.getElementById('inputPrice');

let shoppingListArr = [];

itemName.focus();

// ADD NEW ITEM AND ITS PRICE
document.getElementById('addBtn').addEventListener('click', function () {
    let newItem = itemName.value.trim();
    let newPrice = parseFloat(itemPrice.value).toFixed(2);
    let newItemAndPrice = { item: newItem, price: Number(newPrice) };

    if (newItem && newPrice >= 0) {
        shoppingListArr.push(newItemAndPrice);
        for (let i = 0; shoppingListArr[i]; i++) {
            var liElement = document.createElement('li');
            liElement.id = newPrice;
            liElement.innerText = newItem + ', ' + newPrice + '€';
        }
        shoppingList.appendChild(liElement);
        itemName.value = '';
        itemPrice.value = '';
        itemName.focus();
    } else if (newItem == false && newPrice >= 0) {
        alert('Lisää tuote.');
        itemName.focus();
    } else if (newItem && (newPrice < 0 || typeof newPrice != Number)) {
        alert('Lisää hinta. Käytä pelkästään numeroita!')
        itemPrice.value = '';
        itemPrice.focus();
    } else {
        alert('Kirjoita tarvitsemasi tuote ja hinta.');
        itemPrice.value = '';
        itemName.focus();
    }
    let sortedByPriceArr = shoppingListArr.sort(function (a, b) {
        return a.price - b.price;
    });
    console.log(sortedByPriceArr);
});

// SORT ITEMS ALPHABETICALLY
document.getElementById('sortByItemBtn').addEventListener('click', function () {
    let list, i, switching, b, shouldSwitch;
    list = document.getElementById('list');
    switching = true;
    while (switching) {
        switching = false;
        b = list.getElementsByTagName('LI');
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toUpperCase() > b[i + 1].innerHTML.toUpperCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
});

// SORT ITEMS BY PRICE
document.getElementById('sortByPriceBtn').addEventListener('click', function () {
    let list, i, switching, b, shouldSwitch;
    list = document.getElementById('list');
    switching = true;
    while (switching) {
        switching = false;
        b = list.getElementsByTagName('LI');
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (Number(b[i].id) > Number(b[i + 1].id)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
});

// REMOVE LAST ITEM
document.getElementById('removeLastBtn').addEventListener('click', function () {
    let list = document.getElementById('list');
    if (list.hasChildNodes()) {
        list.removeChild(list.lastChild);
    }
});

// DELETE ALL ITEMS
document.getElementById('deleteAllBtn').addEventListener('click', function () {
    let list = document.getElementById('list');
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    shoppingListArr.length = 0;
});

let inputI = document.getElementById('inputItem');
inputI.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('addBtn').click();
    }
});

let inputP = document.getElementById('inputPrice');
inputP.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('addBtn').click();
    }
});
