/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
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

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  var targetBody = document.getElementsByTagName('tbody')[0];
  targetBody.id = 'test';
  // DONE: Iterate over the items in the cart
  for( var i = 0; i < cart.items.length; i++ ) {
    // DONE: Create a TR
    var newTr = document.createElement('tr');
    newTr.id = cart.items[i].product;
    // DONE: Create a TD for the delete link, quantity,  and the item
    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    var newTdDelete = document.createElement('td');
    newTdDelete.textContent = 'X';
    newTdDelete.id = cart.items[i].product + 'td';
    newTr.appendChild(newTdDelete);

    var newTdQuantity = document.createElement('td');
    newTdQuantity.textContent = cart.items[i].quantity;
    newTr.appendChild(newTdQuantity);

    var newTdItem = document.createElement('td');
    newTdItem.textContent = cart.items[i].product;
    newTr.appendChild(newTdItem);
  }
  targetBody.appendChild(newTr);
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
