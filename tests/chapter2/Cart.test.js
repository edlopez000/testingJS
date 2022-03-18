const assert = require("assert");
const Cart = require("../../src/chapter2/Cart");

const cart = new Cart();
cart.addToCart("cheesecake");
// cart.addToCart("pepper");

assert.deepStrictEqual(cart.items, ["cheesecake"]);
console.log("The addToCart function can add an item to the cart");

cart.removeFromCart("cheesecake");
assert.deepStrictEqual(cart.items, []);
console.log("The removeFromCart function can remove an item from the cart");
