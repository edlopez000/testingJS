const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const allCarts = await prisma.cart.findMany();
  console.log(allCarts);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
