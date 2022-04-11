const { db, closeConnection } = require("../../dbConnection");
const { createCart } = require("../../src/chapter2/cart");

test("createCart creates a cart for a username", async () => {
  await db("carts").truncate(); //deletes the contents of the tables
  await createCart("Lucas da Costa");
  await createCart("John Lonergan");
  const result = await db.select("username").from("carts");
  expect(result).toEqual([
    { username: "Lucas da Costa" },
    { username: "John Lonergan" },
  ]);
  await closeConnection();
});
