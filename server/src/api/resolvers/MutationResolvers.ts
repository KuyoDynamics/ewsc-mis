import { MutationResolvers } from "../../libs/resolvers-types";
import {
  createCountry,
  deleteCountry,
  updateCountry,
} from "../mutations/CountryMutations";

export const mutationResolvers: MutationResolvers = {
  createCountry: (_, args, context) => createCountry(args, context),
  deleteCountry: (_, args, context) => deleteCountry(args.input.id, context),
  updateCountry: (_, args, context) => updateCountry(args, context),
};
