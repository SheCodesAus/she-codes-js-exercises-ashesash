let shoppingListItems = ["milk", "bread", "eggs"];
let listElement = document.getElementById("shopping-list-items");

shoppingListItems.forEach((item) => {
//     console.log(item);
//     console.log("buy a: " + item);
//     console.log("should buy a:", item);
//     console.log(`must buy a: ${item}`);
    let itemElement = document.createElement("li");
    itemElement.innerText = item;
    listElement.appendChild(itemElement);
});

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    console.log("before update item :" , shoppingListItems);
    updateItems();
    console.log("after update item :" , shoppingListItems);
}

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        //     console.log(item);
        //     console.log("buy a: " + item);
        //     console.log("should buy a:", item);
        //     console.log(`must buy a: ${item}`);
            let itemElement = document.createElement("li");
            itemElement.innerText = item;
            listElement.appendChild(itemElement);
        });
}
