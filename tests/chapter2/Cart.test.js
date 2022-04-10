const Cart = require("../../src/chapter2/Cart");

// cart.addToCart("pepper");

test("The addToCart function can add an item to the cart", () => {
  const cart = new Cart();
  cart.addToCart("cheesecake");
  expect(cart.items).toEqual(["cheesecake"]);
});

test("The removeFromCart function can remove an item from the cart", () => {
  const cart = new Cart();
  cart.addToCart("cheesecake");
  cart.removeFromCart("cheesecake");
  expect(cart.items).toEqual([]);
});

test("The printCart function prints the items in the cart", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const cart = new Cart();
  cart.addToCart("cheesecake");
  cart.addToCart("pie");
  cart.printCart();
  expect(consoleSpy).toHaveBeenCalledWith("cheesecake,pie");
});
