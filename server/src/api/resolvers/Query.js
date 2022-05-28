/**
 * @typedef { import("@prisma/client").PrismaClient } Prisma
 */

/**
 *
 * @param {any} parent
 * @param {{id: string}} args
 * @param {{prisma: Prisma}} context
 */
function country(parent, args, context) {
  return context.prisma.country.findUnique({
    where: {
      id: args.id,
    },
  });
}
export { country };
