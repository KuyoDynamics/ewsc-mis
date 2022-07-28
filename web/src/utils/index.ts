import { IPendingUserInvitation } from 'components/users/user-pending-invitation-item';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import {
  CatchmentDistrictInput,
  DistrictUserRoleType,
  OrganisationUserRoleType,
  UserInvitation,
} from '../../graphql/generated';

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

type TokenPayloadType = {
  emails: string[];
  organisation_role: OrganisationUserRoleType;
  catchment_districts?: CatchmentDistrictInput[];
} & JwtPayload;

function getUserInvitations(userInvitations: UserInvitation[]) {
  const tokenInfo: TokenPayloadType[] = userInvitations.map((invite) =>
    jwtDecode(invite.invitation_token)
  );
  const rows: IPendingUserInvitation[] = tokenInfo.flatMap((token) =>
    token.emails.map((email) => ({
      id: token.jti!,
      email,
      organisation_role: token.organisation_role,
      organisation_id: token.sub!,
      catchment_districts: token.catchment_districts,
      created_at: new Date(token.iat! * 1000),
      expires_at: new Date(token.exp! * 1000),
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
  return dateInMilliSeconds < Math.round(new Date().getTime() / 1000);
}

export {
  getEnumKeys,
  getUserInvitations,
  getDateDiff,
  isExpired,
  USER_DISTRICT_ROLE_OPTIONS,
  USER_ORGANISATION_ROLE_OPTIONS,
};
