const { db, closeConnection } = require("../../dbConnection");
const { createCart, addItem } = require("../../src/chapter2/cart");

// beforeEach is a Jest hook that runs before all tests
beforeEach(async () => {
  await db("carts").truncate();
  await db("cart_items").truncate();
});
afterAll(async () => await closeConnection()); // Jest hook that runs after all tests

test("createCart creates a cart for a username", async () => {
  await createCart("Lucas da Costa");
  await createCart("John Lonergan");
  const result = await db.select("username").from("carts");
  expect(result).toEqual([
    { username: "Lucas da Costa" },
    { username: "John Lonergan" },
  ]);
});

test("addItem adds an item to a cart", async () => {
  const username = "John Lonergan";
  await createCart(username);

  const { id: cartId } = await db.select().from("carts").where({ username });
  await addItem(cartId, "frozen pizza");
  const result = await db.select("itemName").from("cart_items");

  expect(result).toEqual([{ cartId, itemName: "frozen pizza" }]);
});
