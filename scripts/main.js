
let shoppingList = document.getElementById('list');
let itemName = document.getElementById('inputItem');
let itemPrice = document.getElementById('inputPrice');

let shoppingListArr = [];

itemName.focus();

document.getElementById('addBtn').addEventListener('click', function () {
    let newItem = itemName.value.trim();
    let newPrice = parseFloat(itemPrice.value).toFixed(2);
    let newItemAndPrice = [Number(newPrice), newItem];

    if (newItem && Number(newPrice)) {
        shoppingListArr.push(newItemAndPrice);
        for (let i = 0; shoppingListArr[i]; i++) {
            var liElement = document.createElement('li');
            liElement.innerText = newItem + ', ' + newPrice + '€';
        }
        shoppingList.appendChild(liElement);
    } else {
        alert('Kirjoita tarvitsemasi tuote ja hinta.');
    }

    itemName.value = '';
    itemPrice.value = '';
    itemName.focus();

    let sortedArray = shoppingListArr.sort(function (a, b) {
        return a[0] - b[0];
    });
    console.log(sortedArray);
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
            if (b[i].innerHTML > b[i + 1].innerHTML) {
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

let input = document.getElementById('inputPrice');
input.addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('addBtn').click();
    }
});