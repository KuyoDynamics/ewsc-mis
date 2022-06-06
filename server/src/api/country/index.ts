import { gql } from "apollo-server-express";
import { Resolvers } from "../../libs/resolvers-types";
import {
  createCountry,
  deleteCountry,
  getCountries,
  getCountryById,
  getOrganisationsByCountryId,
  getProvincesByCountryId,
  updateCountry,
} from "../queries";

const typeDefs = gql`
  type Country {
    id: ID!
    code: String!
    name: String!
    flag: Byte
    provinces: [Province!]
    organisations: [Organisation!]
    created_at: DateTime!
    created_by: String!
    last_modified_at: DateTime!
    last_modified_by: String!
  }

  extend type Query {
    countries: [Country!]
    country(id: ID!): Country
  }

  extend type Mutation {
    createCountry(input: CreateCountryInput!): CreateCountryPayload
    deleteCountry(input: DeleteCountryInput!): DeleteCountryPayload
    updateCountry(input: UpdateCountryInput!): UpdateCountryPayload
  }

  input CreateCountryInput {
    code: String!
    name: String!
    flag: Byte
    provinces: [CreateProvinceInput!]
    organisations: [CreateOrganisationInput!]
  }

  type CreateCountryPayload {
    country: Country!
  }

  type DeleteCountryPayload {
    country: Country!
  }

  input DeleteCountryInput {
    id: ID!
  }

  input UpdateCountryInput {
    id: ID!
    update: CountryUpdateInput!
  }

  input CountryUpdateInput {
    name: String
    code: String
  }

  type UpdateCountryPayload {
    country: Country!
  }

  scalar DateTime
  scalar Byte
`;

const resolvers: Resolvers = {
  Query: {
    countries: (_, _args, context) => getCountries(context),
    country: (_, args, context) => getCountryById(args.id, context),
  },
  Mutation: {
    createCountry: (_, args, context) => createCountry(args, context),
    deleteCountry: (_, args, context) => deleteCountry(args, context),
    updateCountry: (_, args, context) => updateCountry(args, context),
  },
  Country: {
    provinces: async ({ id }, _args, context) =>
      getProvincesByCountryId(id, context),
    organisations: ({ id }, _args, context) =>
      getOrganisationsByCountryId(id, context),
  },
};

export { typeDefs as CountryTypeDefs, resolvers as CountryResolvers };
