import { shield } from "graphql-shield";
import { isValidUserInvitation } from "./rules";

const permissions = shield(
  {
    Mutation: {
      createInvitedUser: isValidUserInvitation,
    },
  },
  { allowExternalErrors: true }
);

export { permissions };
