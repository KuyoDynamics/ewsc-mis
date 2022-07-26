import React from 'react';
import { Button, Chip, TableCell, Typography } from '@mui/material';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

import { LocationCity } from '@mui/icons-material';
import { getDateDiff } from 'utils';
import {
  CatchmentDistrictInput,
  OrganisationUserRoleType,
} from '../../../graphql/generated';

export type AlignOption = 'inherit' | 'left' | 'center' | 'right' | 'justify';

export interface IPendingUserInvitation {
  email: string;
  organisation_role: OrganisationUserRoleType;
  organisation_id: string;
  catchment_districts?: CatchmentDistrictInput[];
  created_at: Date;
  expires_at: Date;
  email_status: string;
}

export interface PendingInvitationItemProps {
  row: IPendingUserInvitation;
  // eslint-disable-next-line react/require-default-props
  align?: AlignOption;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function UserPendingInvitationItem({
  align,
  row: {
    email,
    organisation_id,
    organisation_role,
    catchment_districts,
    created_at,
    expires_at,
    email_status,
  },
}: PendingInvitationItemProps) {
  const daysReamining = getDateDiff(expires_at, new Date());
  const now = new Date();
  const expired = expires_at.getTime() < now.getTime();
  return (
    <>
      <TableCell align={align}>{email}</TableCell>
      <TableCell align={align}>{organisation_role}</TableCell>
      <TableCell align="left">
        <Chip
          label={
            <span>
              {created_at.toDateString()}
              <Typography
                color={!expired ? 'textSecondary' : 'red'}
                gutterBottom
                variant="body2"
              >
                {!expired ? (
                  `${daysReamining} days remaining`
                ) : (
                  <span>expired</span>
                )}
              </Typography>
            </span>
          }
          variant="outlined"
          sx={{
            height: '100%',
            borderColor: expired ? 'red' : 'initial',
          }}
        />
      </TableCell>
      <TableCell align={align}>
        <Button
          disabled={!catchment_districts}
          variant="text"
          size="small"
          endIcon={<LocationCity />}
          //   onClick={handleModalOpen}
        >
          {catchment_districts
            ? `${catchment_districts.length} district(s)`
            : '---'}
        </Button>
      </TableCell>
      <TableCell align={align}>{email_status}</TableCell>
    </>
  );
}

export default UserPendingInvitationItem;
