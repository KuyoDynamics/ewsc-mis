import { Country } from "@prisma/client";

function country(_: any, args: any, context: any): Country {
  return context.prisma.country.findUnique({
    where: {
      id: args.id,
    },
  });
}
export default { country };
