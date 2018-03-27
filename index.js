
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item_price = Math.floor(Math.random() * (100 - 1))
  
  var item_object = {itemName : item, itemPrice : item_price}
  cart.push(item_object);
<<<<<<< HEAD
  
  return console.log(`${item} has been added to your cart.`);
=======
  console.log(`${item} has been added to your cart.`);
  
  return cart;
>>>>>>> ee7adb1540d3f3ea0cf1e8711cf69c12bfc5f0c3
}

function viewCart() {
  
  var sentence = "In your cart, you have";
  
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1) {
<<<<<<< HEAD
    console.log(` ${sentence} ${Object.values(cart[0])[0]} at $${Object.values(cart[0])[1]}.`);
  } else if (cart.length === 2) {
    console.log(` ${sentence} ${Object.values(cart[0])[0]} at $${Object.values(cart[0])[1]}, and ${Object.values(cart[1])[0]} at $${Object.values(cart[1])[1]}.`);
  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      sentence += ` ${Object.values(cart[i])[0]} at $${Object.values(cart[i])[1]},`
=======
    console.log(` ${sentence} ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`);
  } else if (cart.length === 2) {
    console.log(` ${sentence} ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}, and ${Object.keys(cart[1])[0]} at $${Object.values(cart[1])[0]}.`);
  } else {
    for (let i = 0; i < cart.length - 1; i++) {
      sentence += ` ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]},`
>>>>>>> ee7adb1540d3f3ea0cf1e8711cf69c12bfc5f0c3
    }
    sentence += ` and ${Object.keys(cart[cart.length - 1])[0]} at $${Object.values(cart[cart.length - 1])[0]}.`
    
    console.log(sentence);
  }
}

function total() {
<<<<<<< HEAD
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        total += Object.values(cart[i])[1]
        
    }
    return total
=======
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    for (let price in cart[i]) {
      total += cart[i][price]
    }
  }
  return total
>>>>>>> ee7adb1540d3f3ea0cf1e8711cf69c12bfc5f0c3
}

function removeFromCart(item) {
  
  for (let i = 0; i < cart.length; i++) {
    for (let x in cart[i]) {
      if (item === x) {
        cart.splice(i, l)
      } else {
        console.log("That item is not in your cart.")
      }
    }
  }
  
  return cart
}

function placeOrder(cardNumber) {
<<<<<<< HEAD
  if (cardNumber === undefined) {
=======
  if (cardNumber === null) {
>>>>>>> ee7adb1540d3f3ea0cf1e8711cf69c12bfc5f0c3
    console.log("Sorry, we don't have a credit card on file for you")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  return cart
}
