import { PrismaClient } from "@prisma/client";
import { districts, provinces } from "./seed_data/data";
const prisma = new PrismaClient();

async function main() {
  await prisma.country.upsert({
    where: { code: "ZM" },
    update: {},
    create: {
      code: "ZM",
      name: "Zambia",
      created_by: "chaiwa",
      flag: undefined,
      last_modified_by: "chaiwa",
      provinces: {
        createMany: {
          skipDuplicates: true,
          data: provinces,
        },
      },
    },
    include: {
      provinces: true,
    },
  });

  for (const item of districts) {
    await prisma.district.upsert({
      where: { code: item.code },
      update: {},
      create: {
        code: item.code,
        name: item.name,
        created_by: item.created_by,
        last_modified_by: item.last_modified_by,
        province: {
          connect: {
            code: item.province_id,
          },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
