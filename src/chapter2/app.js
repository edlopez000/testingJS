const express = require("express");
const app = express();
const port = 3000;

carts = new Map();

app.get("/carts/:username/:items", (req, res) => {
  const { username, items } = req.params;
  const cart = carts.get(username);
  cart
    ? res.send(cart)
    : res.status(404).send("Didn't find anything with that username!");
});

app.post("/carts/:username/items/:item", (req, res) => {
  const { username, item } = req.params;
  const newItems = (carts.get(username) || []).concat(item);
  carts.set(username, newItems);
  res.send(newItems);
});

module.exports = { app, port };
