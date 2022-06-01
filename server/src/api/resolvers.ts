import {
  Country,
  Province,
  Resolvers,
  District,
} from "../libs/resolvers-types";

export const resolvers: Resolvers = {
  // Query Resolvers
  Query: {
    country: (_parent: unknown, args, context) => {
      return context.prisma.country.findUnique({
        where: {
          id: args.id || undefined,
          code: args.code || undefined,
          name: args.name || undefined,
        },
      });
    },
    allCountries: (_parent: unknown, _args, context) => {
      return context.prisma.country.findMany({});
    },
    province: (_parent: unknown, args, context) => {
      return context.prisma.province.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    provincesByCountry: (_parent: unknown, args, context) => {
      return context.prisma.province.findMany({
        where: {
          country_id: args.country_id,
        },
      });
    },
    district: (_root: unknown, { id }, context) => {
      return context.prisma.district.findUnique({
        where: {
          id,
        },
      });
    },
    districtsByProvince: (_root: unknown, { province_id }, context) => {
      return context.prisma.district.findMany({
        where: {
          province_id,
        },
      });
    },
  },

  // Country Relation Fields Resolvers
  Country: {
    provinces: (parent: Country, _args, context) => {
      return context.prisma.province.findMany({
        where: {
          country_id: parent?.id,
        },
      });
    },
    organisations: (parent: Country, _args, context) => {
      return context.prisma.organisation.findMany({
        where: {
          country_id: parent.id,
        },
      });
    },
  },

  // Province Relation Fields Resolvers
  Province: {
    country: (parent: Province, _args, context) => {
      return context.prisma.country.findUnique({
        where: {
          id: parent?.country_id,
        },
      });
    },
    districts: async (parent: Province, args, context) => {
      const where = args.catchment_only
        ? {
            organisations_in_district: {
              some: {
                district: {
                  province_id: parent?.id,
                },
              },
            },
          }
        : {
            province_id: parent?.id,
          };

      return context.prisma.district.findMany({
        where,
      });
    },
  },

  // District Relation Fields Resolvers
  District: {
    province: (parent: District, _args, context) => {
      return context.prisma.province.findUnique({
        where: {
          id: parent?.province_id,
        },
      });
    },
  },

  // Organisation Relation Fields Resolvers
  Organisation: {
    country: (parent, _args, context) => {
      return context.prisma.country.findUnique({
        where: {
          id: parent?.country_id,
        },
      });
    },
    catchment_provinces: async (parent, _args, context) => {
      const result = await context.prisma.province.findMany({
        where: {
          districts: {
            some: {
              organisations_in_district: {
                some: {
                  organisation_id: parent?.id,
                },
              },
            },
          },
        },
      });

      return result;
    },
    catchment_districts: async (parent, _args, context) => {
      const result = await context.prisma.CatchmentDistrict.findMany({
        where: {
          organisation_id: parent?.id,
        },
        select: { district: true },
      });
      return result.map((item: any) => item?.district);
    },
  },
};
