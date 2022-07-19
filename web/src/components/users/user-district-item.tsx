import React from 'react';
import {
  Checkbox,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TableCell,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { getEnumKeys } from 'utils';
import {
  DistrictUserRoleType,
  GetDefaultOrganisationUsersDocument,
  UserDistrict,
  useUpdateUserRolesForDistrictMutation,
} from '../../../graphql/generated';

const userDistrictRoleOptions = getEnumKeys(DistrictUserRoleType);

export interface UserDistrictProps {
  row: UserDistrict;
  // eslint-disable-next-line react/require-default-props
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

const ITEM_HEIGHT = 48;

const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function UserDistrictItem({ align, row: userDistrict }: UserDistrictProps) {
  const districtName = userDistrict.name ?? '---';
  const provinceName = userDistrict.province?.name ?? '---';
  const userRoles = userDistrict.user_district_roles ?? '---';

  const [userRoleState, setUserRoleState] = React.useState<string[]>(
    userRoles as string[]
  );

  const newUserRoles = React.useMemo(
    () => userRoleState.filter((role) => role !== 'USER'),
    [userRoleState]
  );

  console.log('userRoleState', userRoleState);

  console.log('newUserRoles', newUserRoles);

  const handleChange = (event: SelectChangeEvent<typeof userRoleState>) => {
    const {
      target: { value },
    } = event;
    setUserRoleState(typeof value === 'string' ? value.split(',') : value);
  };

  const [updateUserDistrictRoles, { loading, data, error }] =
    useUpdateUserRolesForDistrictMutation();

  React.useEffect(() => {
    updateUserDistrictRoles({
      variables: {
        input: {
          district_user_id: userDistrict.district_user_id,
          new_roles: newUserRoles as DistrictUserRoleType[],
        },
      },
      refetchQueries: [GetDefaultOrganisationUsersDocument],
    });
  }, [newUserRoles, userDistrict.district_user_id, updateUserDistrictRoles]);

  return (
    <>
      <TableCell align={align}>
        {districtName !== '---' ? (
          <Link to={`/district/${userDistrict.id}`}>{districtName}</Link>
        ) : null}
      </TableCell>
      <FormControl size="small" variant="filled">
        <Select
          id="user-roles"
          multiple
          autoComplete="false"
          value={userRoleState}
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          onChange={handleChange}
        >
          {userDistrictRoleOptions.map((key) => (
            <MenuItem
              key={key}
              value={DistrictUserRoleType[key]}
              disabled={key === 'User'}
            >
              <Checkbox
                checked={userRoleState.indexOf(DistrictUserRoleType[key]) > -1}
              />
              <ListItemText primary={key} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableCell align={align}>
        {provinceName !== '---' ? (
          <Link to={`/province/${userDistrict.province?.id}`}>
            {provinceName}
          </Link>
        ) : (
          provinceName
        )}
      </TableCell>
    </>
  );
}

export default UserDistrictItem;
