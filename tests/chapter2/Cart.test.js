const Cart = require("../../src/chapter2/Cart");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

test("The addToCart function can add an item to the cart", async () => {
  // Creates a new Cart
  const cart = await prisma.cart.create({ data: { username: "Test1" } });
  await prisma.carts_Items.create({
    data: {
      itemName: `cheesecake${cart.id}`,
      cartId: cart.id,
    },
  });
  await prisma.cart.update({
    where: { id: cart.id - 1 },
    data: {
      username: `ChangedName${cart.id}`,
    },
  });
  const cartItems = await prisma.carts_Items.findMany({
    where: { cartId: cart.id },
  });
  console.log(cartItems);
  // console.log(cartItem);
  // const updatedCart = await prisma.cart.update({
  //   where: { id: cart.id },
  //   data: {
  //     Carts_Items: cartItem,
  //   },
  // });
  // console.log(updatedCart);
});

test("The removeFromCart function can remove an item from the cart", () => {
  const cart = new Cart("Test2");
  cart.addToCart("cheesecake");
  cart.removeFromCart("cheesecake");
  expect(cart.items).toEqual([]);
});

test("The printCart function prints the items in the cart", async () => {
  const cart = new Cart("Test3");
  cart.addToCart("cheesecake");
  cart.addToCart("pie");
  await expect(cart.items).toEqual(["cheesecake", "pie"]);
});
