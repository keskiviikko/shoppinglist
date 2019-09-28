
let shoppingList = document.getElementById('list');
let itemName = document.getElementById('inputItem');
let itemPrice = document.getElementById('inputPrice');

let shoppingListArr = [];

itemName.focus();

// UPDATE TOTAL PRICE
function updateTotal() {
    var total = shoppingListArr.reduce(function (cnt, o) { return cnt + o.price; }, 0);

    document.getElementById('total').innerHTML = 'Total ' + parseFloat(total).toFixed(2);
}

updateTotal();

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
            liElement.innerText = newItem + ', ' + newPrice;
        }
        shoppingList.appendChild(liElement);

        // DELETE SELECTED ITEM
        // PROBLEM - DELETES MULTIPLE ITEMS FROM ARRAY IF SAME PRICE (will fix soon)
        liElement.onclick = function () {
            this.parentNode.removeChild(this);
            shoppingListArr = shoppingListArr.filter(obj => obj.price != this.id);
            updateTotal();
            console.log(shoppingListArr);
        }

        // RESET INPUT VALUES
        itemName.value = '';
        itemPrice.value = '';
        itemName.focus();
        console.log(shoppingListArr);

        // ERROR MESSAGES
    } else if (newItem == false && newPrice >= 0) {
        alert('Item is missing.');
        itemName.focus();
    } else if (newItem && (newPrice < 0 || typeof newPrice != Number)) {
        alert('Price is missing or wrong. Use numbers only!')
        itemPrice.value = '';
        itemPrice.focus();
    } else {
        alert('Item and price are missing.');
        itemPrice.value = '';
        itemName.focus();
    }

    updateTotal();
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

// DELETE ALL ITEMS
document.getElementById('deleteAllBtn').addEventListener('click', function () {
    let list = document.getElementById('list');
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    shoppingListArr.length = 0;
    updateTotal();
    console.log(shoppingListArr);
});

// RETURN KEY
function addReturnKeyPressHandlers() {
    function clickAddBtn(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('addBtn').click();
        }
    }
    document.getElementById('inputItem').addEventListener('keyup', clickAddBtn);
    document.getElementById('inputPrice').addEventListener('keyup', clickAddBtn);
}

addReturnKeyPressHandlers();
