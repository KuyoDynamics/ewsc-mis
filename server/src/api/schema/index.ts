import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeResolvers } from '@graphql-tools/merge';
import typeDefs from '../typedefs';
import resolvers from '../resolvers';
import { applyMiddleware } from 'graphql-middleware';
import { permissions as permissionsMiddleware } from '../../permissions';
import {
  deleteUserInvitationMiddleware,
  sendInvitationEmailMiddleware,
  sendPasswordResetEmailMiddleware,
} from '../../middleware';

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs: [...typeDefs],
    resolvers: mergeResolvers(resolvers),
  }),
  permissionsMiddleware,
  deleteUserInvitationMiddleware,
  sendInvitationEmailMiddleware,
  sendPasswordResetEmailMiddleware
);

export { schema };
