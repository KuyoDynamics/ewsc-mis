// import {
//   FieldFunctionOptions,
//   ReadFieldOptions,
//   Reference,
//   StoreObject,
// } from '@apollo/client/cache';

import { IPendingUserInvitation } from 'components/users/user-pending-invitation-item';
import jwtDecode from 'jwt-decode';
import { resolve } from 'path';
import {
  CatchmentDistrictInput,
  DistrictUserRoleType,
  OrganisationUserRoleType,
  UserInvitation,
} from '../../graphql/generated';

// type DeepReference<X> = X extends Record<string, any>
//   ? X extends { id: string }
//     ? Reference
//     : {
//         [K in keyof X]: DeepReference<X[K]>;
//       }
//   : X extends Array<{ id: string }>
//   ? Array<Reference>
//   : X;

// export interface ReadFieldFunction {
//   <T, K extends keyof T = keyof T>(
//     context: FieldFunctionOptions,
//     options: ReadFieldOptions
//   ): DeepReference<T[K]>;

//   <T, K extends keyof T = keyof T>(
//     context: FieldFunctionOptions,
//     fieldName: K,
//     from?: Reference | StoreObject | undefined
//   ): DeepReference<T[K]>;
// }

// export const readField: ReadFieldFunction = (...args) => {
//   const [context, ...restArgs] = args;
//     return context.readField(...restArgs);
// };

const getEnumKeys = <T>(
  enumToDeconstruct: T
): Array<keyof typeof enumToDeconstruct> => {
  return Object.keys(enumToDeconstruct) as Array<
    keyof typeof enumToDeconstruct
  >;
};

const USER_DISTRICT_ROLE_OPTIONS: string[] =
  Object.values(DistrictUserRoleType);

const USER_ORGANISATION_ROLE_OPTIONS: string[] = Object.values(
  OrganisationUserRoleType
);

interface ITokenPayload {
  emails: string[];
  organisation_role: OrganisationUserRoleType;
  catchment_districts?: CatchmentDistrictInput[];
  exp: number;
  iat: number;
  sub: string;
  jit: string;
  aud: string;
}

function getUserInvitations(userInvitations: UserInvitation[]) {
  const tokenInfo: ITokenPayload[] = userInvitations.map((invite) =>
    jwtDecode(invite.invitation_token)
  );
  const rows: IPendingUserInvitation[] = tokenInfo.flatMap((token) =>
    token.emails.map((email) => ({
      email,
      organisation_role: token.organisation_role,
      organisation_id: '',
      catchment_districts: token.catchment_districts,
      created_at: new Date(token.iat * 1000),
      expires_at: new Date(token.exp * 1000),
      email_status: 'not sent',
    }))
  );
  return rows;
}

function getDateDiff(date1: Date, date2: Date) {
  return Math.round(
    (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)
  );
}

function isExpired(dateInMilliSeconds: number): boolean {
  console.log('===========In the isExpired==========');
  console.log('dateInMilliSeconds', dateInMilliSeconds);
  const den = Math.round(new Date().getTime() / 1000);
  const res = dateInMilliSeconds < den;
  console.log('new Date().getTime() / 1000;', den);
  console.log('dateInMilliSeconds < new Date().getTime() / 1000;', res);
  return res;
}

export {
  getEnumKeys,
  getUserInvitations,
  getDateDiff,
  isExpired,
  USER_DISTRICT_ROLE_OPTIONS,
  USER_ORGANISATION_ROLE_OPTIONS,
};
