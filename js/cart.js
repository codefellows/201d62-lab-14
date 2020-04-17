/* global Cart */
'use strict';
var targetBody = document.getElementsByTagName('tbody')[0];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var removeTr = document.getElementById('cart');
removeTr.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { 
targetBody.innerHTML = '';
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  targetBody.id = 'test';
  // DONE: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++) {
    // DONE: Create a TR
    var newTr = document.createElement('tr');
    newTr.id = cart.items[i].product + 'tr';
    // DONE: Create a TD for the delete link, quantity,  and the item
    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    var newTdDelete = document.createElement('td');

    newTdDelete.textContent = 'X';
    newTdDelete.id = cart.items[i].product;
    newTdDelete.className = 'remove';
    newTr.appendChild(newTdDelete);

    var newTdQuantity = document.createElement('td');
    newTdQuantity.textContent = cart.items[i].quantity;
    newTr.appendChild(newTdQuantity);

    var newTdItem = document.createElement('td');
    newTdItem.textContent = cart.items[i].product;
    newTr.appendChild(newTdItem);


    var newImage = document.createElement('img');
    for (var j = 0; j < Product.allProducts.length; j++){
      if (cart.items[i].product === Product.allProducts[j].name){
        newImage.src = Product.allProducts[j].filePath;
        newImage.height = '100';
        newImage.width = '100';
      }
    }
    var newTdImage = document.createElement('td');
    newTdImage.appendChild(newImage);
    newTr.appendChild(newTdImage);
    targetBody.appendChild(newTr);
  }
}

function removeItemFromCart(event) {

  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item

  var targetItem = cart.items.indexOf(event.target.id);
  cart.removeItem(targetItem);
  // DONE: Save the cart back to local storage
  // DONE: Re-draw the cart table
clearCart();
renderCart();
};

// This will initialize the page and draw the cart on screen
renderCart();
// var removeTr = document.getElementsByTagName('remove');
// removeTr.addEventListener('click', removeItemFromCart);