import {
  generateClientErrors,
  GraphQLContext,
  prepareDistrictUserRolesForCreate,
  prepareDistrictUserRolesForUpdate,
} from '../../utils';
import {
  DistrictUser,
  DistrictUserResult,
  MutationCreateDistrictUserArgs,
  MutationDeleteDistrictUserArgs,
  MutationSetUserDefaultDistrictArgs,
  MutationUpdateUserRolesForDistrictArgs,
  QueryDistrict_UserArgs,
  QueryDistrict_UsersArgs,
  UserDistrict,
} from '../../libs/resolvers-types';

async function getDistrictUsers(
  args: QueryDistrict_UsersArgs,
  context: GraphQLContext
): Promise<DistrictUser[]> {
  const res = await context.prisma.catchmentDistrict
    .findUnique({
      where: {
        id: args.catchment_district_id,
      },
    })
    .users();
  return res as DistrictUser[];
}

async function resolveUserDistricts(
  user_id: string,
  organisation_id: string,
  context: GraphQLContext
): Promise<UserDistrict[]> {
  const result = await context.prisma.user.findUnique({
    where: {
      id: user_id,
    },
    select: {
      id: true,
      user_organisations: {
        select: {
          district_users: {
            where: {
              organisation_user: {
                organisation_id,
              },
            },
            select: {
              id: true,
              is_default_user_district: true,
              roles: true,
              organisation_user: {
                select: {
                  organisation_id: true,
                },
              },
              catchment_district: {
                select: {
                  id: true,
                  disabled: true,
                  district: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const user_districts = result?.user_organisations.flatMap((user_org) =>
    user_org.district_users.flatMap((district_user) => ({
      user_id: result.id,
      district_user_id: district_user.id,
      user_district_roles: district_user.roles,
      organisation_id: district_user.organisation_user.organisation_id,
      is_default_user_district: district_user.is_default_user_district,
      disabled: district_user.catchment_district.disabled,
      catchment_district_id: district_user.catchment_district.id,
      ...district_user.catchment_district.district,
    }))
  );

  return user_districts as UserDistrict[];
}

async function getDistrictUser(
  args: QueryDistrict_UserArgs,
  context: GraphQLContext
): Promise<DistrictUserResult> {
  try {
    const district_user = await context.prisma.districtUser.findUnique({
      where: {
        id: args.district_user_id,
      },
    });

    if (!district_user) {
      return {
        __typename: 'ApiNotFoundError',
        message: `The DistrictUser with the id ${args.district_user_id} does not exist.`,
      };
    }

    return {
      __typename: 'DistrictUser',
      ...district_user,
    } as DistrictUser;
  } catch (error) {
    return {
      __typename: 'ApiNotFoundError',
      message: `Failed to find DistrictUser with the id ${args.district_user_id}.`,
      errors: generateClientErrors(error),
    };
  }
}

async function createDistrictUser(
  args: MutationCreateDistrictUserArgs,
  context: GraphQLContext
): Promise<DistrictUserResult> {
  try {
    const district_user = await context.prisma.districtUser.create({
      data: {
        organisation_user_id: args.input.organisation_user_id,
        catchment_district_id: args.input.catchment_district_id,
        roles: prepareDistrictUserRolesForCreate(args.input.roles),
        created_by: context.user?.email,
        last_modified_by: context.user?.email,
      },
    });
    return {
      __typename: 'DistrictUser',
      ...district_user,
    } as DistrictUser;
  } catch (error) {
    return {
      __typename: 'ApiCreateError',
      message: `Failed to create DistrictUser.`,
      errors: generateClientErrors(error),
    };
  }
}

async function updateUserRolesForDistrict(
  args: MutationUpdateUserRolesForDistrictArgs,
  context: GraphQLContext
): Promise<DistrictUserResult> {
  try {
    const district_user = await context.prisma.districtUser.update({
      where: {
        id: args.input.district_user_id,
      },
      data: {
        roles: prepareDistrictUserRolesForUpdate(args.input.new_roles),
        last_modified_by: context.user.email,
      },
    });
    return {
      __typename: 'DistrictUser',
      ...district_user,
    } as DistrictUserResult;
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: `Failed to update new roles for User's District with ${{
        district_user_id: args.input.district_user_id,
        roles: args.input.new_roles,
      }}.`,
      errors: generateClientErrors(error, 'district_user_id'),
    };
  }
}

async function setUserDefaultDistrict(
  args: MutationSetUserDefaultDistrictArgs,
  context: GraphQLContext
): Promise<DistrictUserResult> {
  try {
    const [_batchResult, updateResult] = await context.prisma.$transaction([
      context.prisma.districtUser.updateMany({
        where: {
          organisation_user_id: args.input.organisation_user_id,
        },
        data: {
          is_default_user_district: false,
        },
      }),

      context.prisma.districtUser.update({
        where: {
          id: args.input.district_user_id,
        },
        data: {
          is_default_user_district: true,
        },
      }),
    ]);
    return {
      __typename: 'DistrictUser',
      ...updateResult,
    } as DistrictUserResult;
  } catch (error) {
    return {
      __typename: 'ApiUpdateError',
      message: `Failed to update UserDistrict as Default with ${{
        district_user_id: args.input.district_user_id,
        organisation_user_id: args.input.organisation_user_id,
      }}.`,
      errors: generateClientErrors(error, 'district_user_id'),
    };
  }
}

async function deleteDistrictUser(
  args: MutationDeleteDistrictUserArgs,
  context: GraphQLContext
): Promise<DistrictUserResult> {
  try {
    const district_user = await context.prisma.districtUser.delete({
      where: {
        id: args.input.id,
      },
    });

    return {
      __typename: 'DistrictUser',
      ...district_user,
    } as DistrictUser;
  } catch (error) {
    return {
      __typename: 'ApiDeleteError',
      message: `Failed to delete DistrictUser with id ${args.input.id}.`,
      errors: generateClientErrors(error, 'id'),
    };
  }
}

export {
  createDistrictUser,
  deleteDistrictUser,
  getDistrictUsers,
  getDistrictUser,
  setUserDefaultDistrict,
  updateUserRolesForDistrict,
  resolveUserDistricts,
};
