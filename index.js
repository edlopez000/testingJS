const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Getting a hang of Prisma in general by making some calls
async function main() {
  const newCart = await prisma.cart.create({ data: { username: "Hello4" } });
  const checkCart = await prisma.cart.findUnique({ where: { id: 4 } });
  console.log(newCart);
  console.log(checkCart);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
