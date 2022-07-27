
var myShoppingList = ['milk', 'eggs', 'bread', 'apples'];


window.onload = () => {
    displayList();
}

function checkInput(newItem) {


    if (newItem == '') {
        alert('Please enter a value');
        return false;
    }
    return true;

}

function addButton() {
    var input = document.getElementById('inputId');
    var newItem = input.value;

    if (checkInput(newItem)) {
        console.log(newItem);
        myShoppingList.push(newItem);
        console.log(myShoppingList);
        displayList();
        document.getElementById('inputId').value = '';


    }

}

function displayList(myShopingList) {

    clearList();

    var list = document.getElementById('myShoppingList');

    for (var i = 0; i < myShoppingList.length; i++) {
        var item = document.createElement('li');
        item.innerHTML = myShoppingList[i];
        list.appendChild(item);
    }

}

function clearList() {
    var list = document.getElementById('myShoppingList');
    list.innerHTML = '';
}
