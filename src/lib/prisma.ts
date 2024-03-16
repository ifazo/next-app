import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .catch(async (e) => {
    console.error(e);
    // process.exit(1)
  })
  .finally(async () => {
    // await prisma.$disconnect()
  });

export default prisma;
