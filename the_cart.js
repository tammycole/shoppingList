// The Cart!
// ---------

// This is in ES6 syntax
// ---------------------

//This is my list of shopping cart items
const shoppingCartItems = [
  {
    name : `apple`,
    price: 1.00
  }, {
    name : `banana`,
    price: 0.5
  }, {
    name : `orange`,
    price: 2.00
  }, {
    name : `grape`,
    price: 0.25
  }, {
    name : `mango`,
    price: 3.00
  }
]; 

// Create a final puchase cart
var finalPurchaseItems = [];

// Select the body of the website
const shoppingCart   = document.querySelector(`shopping-cart`);

// Select the final purchases and display total elements
const finalPurchases = document.querySelector(`final-purchases`);
const displayTotal   = document.querySelector(`total-cost`);

// Loop through the array of items and create a shopping cart element
shoppingCartItems.forEach(function(item) {
  // Create an element for each item
  const shoppingCartItem = document.createElement(`shopping-cart-item`);
  const addButton        = document.createElement(`button`);
  const itemText         = document.createElement(`shopping-cart-item-text`);

  // Then add text to the button
  addButton.innerText    = `+`;
 
  // Then add the item name and the item price to the element
  itemText.innerText = `${item.name}: $${item.price}`;

  // Then add the items to the shopping cart element
  shoppingCartItem.appendChild(itemText);
  shoppingCartItem.appendChild(addButton);
  
  // Then add the item to the page
  shoppingCart.appendChild(shoppingCartItem);
  const itemToAdd = item;
  
  //Then add a clickable function for adding to final purchases
  addButton.onclick    = function(){
    addItem(itemToAdd);
  };
});

//Then allow user to add item to final purchases
function addItem(item){
  finalPurchaseItems.push(item);
  calculateTotal();
}

// Calculate total
function calculateTotal(){
  //Then display the total cost for the items on index.html
  var finalTotal = 0;
  finalPurchases.innerText = ``;
  
  // Loop through the array of items and create a final purchase element
  finalPurchaseItems.forEach(function(item) {
    // Add the price of the item to the final total
    finalTotal += item.price;
    
    const finalPurchaseItem = document.createElement(`purchased-item`);

    finalPurchaseItem.innerText = `${item.name} $${item.price}`;
    
    finalPurchases.appendChild(finalPurchaseItem);
    
  });

  displayTotal.innerText   = `$${finalTotal}`;
}