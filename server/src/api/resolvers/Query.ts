import { Country } from "@prisma/client";

function country(_: any, args: any, context: any): Country {
  return context.prisma.country.findUnique({
    include: {
      provinces: true,
    },
    where: {
      id: args.id,
    },
  });
}

function allCountries(_: any, __: any, context: any) {
  return context.prisma.country.findMany({ include: { provinces: true } });
}

function province(_: any, args: any, context: any) {
  return context.prisma.province.findUnique({
    include: { districts: true },
    where: {
      id: args.id,
    },
  });
}

function provincesByCountry(_: any, args: any, context: any) {
  return context.prisma.province.findMany({
    include: {
      districts: true,
    },
    where: {
      country_id: args.country_id,
    },
  });
}

export default {
  country,
  allCountries,
  province,
  provincesByCountry,
};
