import { ValidationError } from "apollo-server-core";
import {
  CreateResidencePayload,
  MutationCreateResidenceArgs,
  MutationUpdateResidenceArgs,
  QueryResidenceArgs,
  QueryResidencesArgs,
  Residence,
  UpdateResidencePayload,
  ResidenceUpdateInput,
  MutationDeleteResidenceArgs,
  DeleteResidencePayload,
} from "../../libs/resolvers-types";
import { GraphQLContext } from "../../utils";

async function getResidence(
  args: QueryResidenceArgs,
  context: GraphQLContext
): Promise<Residence> {
  const result = await context.prisma.residence.findUnique({
    where: {
      id: args.id,
    },
  });
  return result as Residence;
}

async function getResidences(
  args: QueryResidencesArgs,
  context: GraphQLContext
): Promise<Residence[]> {
  const result = await context.prisma.district
    .findUnique({
      where: {
        id: args.district_id,
      },
    })
    .residences();
  return result as Residence[];
}

async function createResidence(
  args: MutationCreateResidenceArgs,
  context: GraphQLContext
): Promise<CreateResidencePayload> {
  const residence = await context.prisma.residence.create({
    data: {
      name: args.input.name,
      cost_classification: args.input.cost_classification,
      district_id: args.input.district_id,
      created_by: context.user.email,
      last_modified_by: context.user.email,
    },
  });
  return { residence } as CreateResidencePayload;
}

async function updateResidence(
  args: MutationUpdateResidenceArgs,
  context: GraphQLContext
): Promise<UpdateResidencePayload> {
  if (
    !args.input.update.cost_classification &&
    !args.input.update.name &&
    !args.input.update.district_id
  )
    throw new ValidationError("Invalid input");

  const requiredInput = {
    name: args.input.update.name || undefined,
    cost_classification: args.input.update.cost_classification || undefined,
    district_id: args.input.update.district_id || undefined,
    last_modified_by: context.user.email,
  };

  const residence = await context.prisma.residence.update({
    where: {
      id: args.input.id,
    },
    data: requiredInput,
  });

  return { residence } as UpdateResidencePayload;
}

async function deleteResidence(
  args: MutationDeleteResidenceArgs,
  context: GraphQLContext
): Promise<DeleteResidencePayload> {
  const residence = await context.prisma.residence.delete({
    where: {
      id: args.input.id,
    },
  });

  return { residence } as DeleteResidencePayload;
}

export {
  getResidence,
  getResidences,
  createResidence,
  updateResidence,
  deleteResidence,
};
