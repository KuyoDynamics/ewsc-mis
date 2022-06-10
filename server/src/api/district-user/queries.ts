import { GraphQLContext } from "../..";
import {
  CreateDistrictUserPayload,
  DeleteDistrictUserPayload,
  DistrictUser,
  MutationCreateDistrictUserArgs,
  MutationDeleteDistrictUserArgs,
  QueryDistrict_UserArgs,
  QueryDistrict_UsersArgs,
} from "../../libs/resolvers-types";

async function getDistrictUsers(
  args: QueryDistrict_UsersArgs,
  context: GraphQLContext
): Promise<DistrictUser[]> {
  return context.prisma.catchmentDistrict
    .findUnique({
      where: {
        id: args.catchment_district_id,
      },
    })
    .users();
}

async function getDistrictUser(
  args: QueryDistrict_UserArgs,
  context: GraphQLContext
): Promise<DistrictUser | null> {
  return context.prisma.districtUser.findUnique({
    where: {
      id: args.district_user_id,
    },
  });
}

async function createDistrictUser(
  args: MutationCreateDistrictUserArgs,
  context: GraphQLContext
): Promise<CreateDistrictUserPayload> {
  const requiredInput = {
    organisation_user_id: args.input.organisation_user_id,
    catchment_district_id: args.input.catchment_district_id,
    created_by: context.user.email,
    last_modified_by: context.user.email,
  };

  const district_user = await context.prisma.districtUser.create({
    data: requiredInput,
  });

  return { district_user };
}

async function deleteDistrictUser(
  args: MutationDeleteDistrictUserArgs,
  context: GraphQLContext
): Promise<DeleteDistrictUserPayload> {
  const district_user = await context.prisma.districtUser.delete({
    where: {
      id: args.input.id,
    },
  });

  return { district_user };
}

export {
  createDistrictUser,
  deleteDistrictUser,
  getDistrictUsers,
  getDistrictUser,
};
