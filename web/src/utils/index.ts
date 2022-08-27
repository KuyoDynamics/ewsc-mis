import {
  GridApi,
  gridColumnDefinitionsSelector,
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
} from '@mui/x-data-grid';
import { IPendingUserInvitation } from 'components/users/user-pending-invitation-item';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { utils, writeFile } from 'xlsx';
import {
  CatchmentDistrictInput,
  DisaggregateType,
  DistrictUserRoleType,
  OrganisationUserRoleType,
  ResidenceClassification,
  User,
  UserInvitation,
  UserTheme,
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

const COST_CLASSIFICATION_OPTIONS: string[] = Object.values(
  ResidenceClassification
);

const INDICATOR_DISAGGREGATE_TYPE_OPTIONS: string[] =
  Object.values(DisaggregateType);

const USER_ORGANISATION_ROLE_OPTIONS: string[] = Object.values(
  OrganisationUserRoleType
);

const USER_THEME_OPTIONS: string[] = Object.values(UserTheme);

type TokenPayloadType = {
  email: string;
  organisation_role: OrganisationUserRoleType;
  catchment_districts?: CatchmentDistrictInput[];
} & JwtPayload;

function getUserInvitations(
  userInvitations: UserInvitation[],
  organisationName: string
) {
  const rows: IPendingUserInvitation[] = userInvitations.map((invite) => {
    const token: TokenPayloadType = jwtDecode(invite.invitation_token);

    return {
      id: token.jti!,
      email: token.email,
      organisation_name: organisationName,
      organisation_role: token.organisation_role,
      organisation_id: token.sub!,
      catchment_districts: token.catchment_districts,
      created_at: new Date(token.iat! * 1000),
      expires_at: new Date(token.exp! * 1000),
      email_status: invite.email_status,
    };
  });
  return rows;
}

function getNameInitials(firstName: string, lastName: string) {
  return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}

function getCatchmentDistricts(currentUser: User) {
  return currentUser.user_default_organisation?.catchment_provinces?.flatMap(
    (cp) => cp.catchment_districts?.filter((district) => !district.disabled)
  );
}

function getDateDiff(date1: Date, date2: Date) {
  return Math.round(
    (date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24)
  );
}

function isExpired(dateInMilliSeconds: number): boolean {
  return dateInMilliSeconds < Math.round(new Date().getTime() / 1000);
}

type ILocationFilterState = {
  countryId: string;
  provinceId: string;
  districtId: string;
  residenceId: string;
  organisationId: string;
};

const exportBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  });
};

function saveExcelFile(
  fileName: string,
  worksheetName: string,
  ext: string,
  rows: Record<string, any>[]
): void {
  const wb = utils.book_new();

  const worksheet = utils.json_to_sheet(rows);

  utils.book_append_sheet(wb, worksheet, worksheetName);

  writeFile(wb, `${fileName}.${ext}`);
}

const getJson = (apiRef: React.MutableRefObject<GridApi>) => {
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);

  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

  const disableExportCols = gridColumnDefinitionsSelector(apiRef)
    .filter((col) => col.disableExport)
    .map((col) => col.field);

  const exportableVisibleColumnsField = visibleColumnsField.filter(
    (field) => disableExportCols.indexOf(field) === -1
  );

  const data = filteredSortedRowIds.map((id) => {
    const row: Record<string, any> = {};
    exportableVisibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value;
    });
    return row;
  });

  return { jsonString: JSON.stringify(data, null, 2), json: data };
};

export {
  getJson,
  saveExcelFile,
  exportBlob,
  ILocationFilterState,
  getEnumKeys,
  getUserInvitations,
  getCatchmentDistricts,
  getDateDiff,
  isExpired,
  USER_DISTRICT_ROLE_OPTIONS,
  USER_ORGANISATION_ROLE_OPTIONS,
  USER_THEME_OPTIONS,
  COST_CLASSIFICATION_OPTIONS,
  INDICATOR_DISAGGREGATE_TYPE_OPTIONS,
  getNameInitials,
};
