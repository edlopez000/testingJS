const express = require("express");
const app = express();
const port = 3000;

carts = new Map();

app.get("/carts/:username/:items", (req, res) => {
  console.log(`GET Params: ${req.params}`);
  const { username, items } = req.params;
  const cart = carts.get(username);
  cart
    ? res.send(cart)
    : res.status(404).send("Didn't find anything with that username!");
});

app.post("/carts/:username/items/:item", (req, res) => {
  console.log(`POST Params: ${req.params}`);
  const { username, item } = req.params;
  const newItems = (carts.get(username) || []).concat(item);
  carts.set(username, newItems);
  res.send(newItems);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
