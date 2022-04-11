const fetch = require("isomorphic-fetch");
const { app } = require("../../src/chapter2/app");
const { server } = require("../../src/chapter2/server");

const apiRoot = "http://localhost:3000";

beforeAll(() => {
  app.listen(3001);
});

afterAll(() => {
  server.close();
});

const addItem = (username, item) => {
  return fetch(`${apiRoot}/carts/${username}/items/${item}`, {
    method: "POST",
  });
};

const getItems = (username) => {
  return fetch(`${apiRoot}/carts/${username}/iteml`, {
    method: "GET",
  });
};

test("should add items to a cart", async () => {
  const initialItemsResponse = await getItems("lucas");
  expect(initialItemsResponse.status).toEqual(404);

  const addItemResponse = await addItem("lucas", "cheesecake");
  expect(await addItemResponse.json()).toEqual(["cheesecake"]);

  const finalItemsResponse = await getItems("lucas");
  expect(await finalItemsResponse.json()).toEqual(["cheesecake"]);
});
