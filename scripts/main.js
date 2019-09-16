
let shoppingList = document.getElementById('list');
let itemName = document.getElementById('inputItem');
let itemPrice = document.getElementById('inputPrice');

let shoppingListArr = [];

itemName.focus();

document.getElementById('addBtn').addEventListener('click', function () {
    let newItem = itemName.value.trim();
    let newPrice = parseFloat(itemPrice.value).toFixed(2);
    let newItemAndPrice = { item: newItem, price: Number(newPrice) };

    if (newItem && newPrice >= 0) {
        shoppingListArr.push(newItemAndPrice);
        for (let i = 0; shoppingListArr[i]; i++) {
            var liElement = document.createElement('li');
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
        alert('Lisää hinta. (Käytä pelkästään numeroita!)')
        itemPrice.value = '';
        itemPrice.focus();
    } else {
        alert('Kirjoita tarvitsemasi tuote ja hinta.');
        itemPrice.value = '';
        itemName.focus();
    }

    console.log(shoppingListArr);

    let sortedByPriceArr = shoppingListArr.sort(function (a, b) {
        return a.price - b.price;
    });
    //console.log(sortedByPriceArr);
});

document.getElementById('sortByItemBtn').addEventListener('click', function () {
    let list, i, switching, b, shouldSwitch;
    list = document.getElementById('list');
    switching = true;
    while (switching) {
        switching = false;
        b = list.getElementsByTagName("LI");
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

document.getElementById('sortByPriceBtn').addEventListener('click', function () {
    let list, i, switching, b, shouldSwitch;
    list = document.getElementById('list');
    switching = true;
    while (switching) {
        switching = false;
        b = list.getElementsByTagName("LI");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (Number(b[i].innerHTML.replace(/[^0-9]/g, '')) > Number(b[i + 1].innerHTML.replace(/[^0-9]/g, ''))) {
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
