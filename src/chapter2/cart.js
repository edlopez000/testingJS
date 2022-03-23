const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Cart {
  constructor(name) {
    this.name = name;
    this.items = [];
    prisma.cart.create({ username: this.name });
  }

  addToCart(item) {
    prisma.cart.update({
      where: { username: this.name },
      data: { Carts_Items: { item: item } },
    });
    this.items.push(item);
  }

  removeFromCart(item) {
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i];
      if (currentItem === item) {
        this.items.splice(i, 1);
      }
    }
  }

  printCart(name) {
    const currentCart = prisma.cart.findUnique({
      where: { username: this.name },
    });
    console.log(`${currentCart}`);
  }
}

module.exports = Cart;
