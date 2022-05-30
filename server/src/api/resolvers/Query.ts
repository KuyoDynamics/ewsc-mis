function country(_: any, args: any, context: any) {
  return context.prisma.country.findUnique({
    where: {
      id: args.id,
    },
  });
}
export default { country };
