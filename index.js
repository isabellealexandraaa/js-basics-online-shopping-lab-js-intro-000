var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemPrice = Math.floor(Math.random() *(100 - 1)+ 1);
cart.push({itemName: item, itemPrice: itemPrice});
return `${item} has been added to your cart.`
}

function viewCart() {
var words1 = 'In your cart, you have'
if (cart.length === 0) {
  return 'Your shopping cart is empty.'
}
else if (cart.length === 1) {
  return `${words1} ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
}
else if (cart.length === 2) {
  return `${words1} ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`
}
else if (cart.length >= 3) {
  var words2 = ' '
  for (var i = 0; i < cart.length-1; i++) {
    words2 += `${getCart()[i].itemName} at $${getCart()[i].itemPrice},`
  }
  var words3 =`and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  return `${words1} ${words2} ${words3}.`
}

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
