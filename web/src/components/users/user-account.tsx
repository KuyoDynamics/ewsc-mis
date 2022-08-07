/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  MenuItem,
  Skeleton,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Info, MoreVert as MoreVertIcon } from '@mui/icons-material';
import {
  useMatch,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getNameInitials, USER_THEME_OPTIONS } from 'utils';
import FormInput from 'components/form-input-helpers/form-input';
import FormSelect from 'components/form-input-helpers/form-select';
import UserAccountMenu from 'components/users/user-account-menu';
import { useGetUserQuery, UserTheme } from '../../../graphql/generated';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from 'cache';

const schema = Yup.object({
  first_name: Yup.string().max(255).required('First name is required'),
  last_name: Yup.string().max(255).required('Last name is required'),
  //  theme
});

interface FormInputs {
  first_name: string;
  last_name: string;
  theme: UserTheme;
}

function UserAccount() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const currentUser = useReactiveVar(currentUserVar);

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const params = useParams();

  const currentUserAccountRoute = useMatch('/account/:id');

  const userId = params.id;

  console.log('searchParams', params);
  console.log('userId', userId);

  const { data, loading } = useGetUserQuery({
    variables: {
      userId: userId!,
    },
    skip: !userId,
  });

  const user = useMemo(
    () => (data?.user.__typename === 'User' ? data.user : null),
    [data]
  );

  const isCurrentUser = currentUser.id === user?.id;

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, isDirty, touchedFields, errors },
    reset,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: user as FormInputs,
  });

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSubmit = ({ first_name, last_name, theme }: FormInputs) => {};

  const isLoading = loading || !user;

  console.log('currentUser', currentUser);
  console.log('isCurrentUser', isCurrentUser);

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader
          subheader={
            isLoading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              <div>
                <Typography variant="subtitle1">
                  {user.email}{' '}
                  <Tooltip title="User Info">
                    <IconButton>
                      <Info />
                    </IconButton>
                  </Tooltip>
                </Typography>
                <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                  {user.disabled ? 'Disabled' : 'Active'}
                </Typography>
              </div>
            )
          }
          title={
            isLoading ? (
              <Skeleton
                animation="wave"
                height={10}
                width="80%"
                style={{ marginBottom: 6 }}
              />
            ) : (
              <Typography variant="h3">Account Profile</Typography>
            )
          }
          avatar={
            isLoading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <Avatar aria-label="recipe">
                {getNameInitials(user?.first_name, user?.last_name)}
              </Avatar>
            )
          }
          action={
            isLoading ? null : (
              <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
              </IconButton>
            )
          }
        />
        <UserAccountMenu
          open={open}
          handleClose={handleClose}
          anchorEl={anchorEl}
          user={user!}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            {isLoading ? (
              <>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </>
            ) : (
              <>
                <Grid item md={6} xs={12}>
                  <FormInput
                    control={control}
                    InputProps={{
                      readOnly: !isCurrentUser,
                      disabled: !isCurrentUser,
                    }}
                    fullWidth
                    label="First name"
                    name="first_name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormInput
                    control={control}
                    InputProps={{
                      readOnly: !isCurrentUser,
                      disabled: !isCurrentUser,
                    }}
                    fullWidth
                    label="Last name"
                    name="last_name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormSelect
                    control={control}
                    errors={errors}
                    inputProps={{
                      readOnly: !isCurrentUser,
                      disabled: !isCurrentUser,
                    }}
                    fullWidth
                    label="Theme"
                    name="theme"
                    variant="outlined"
                  >
                    {USER_THEME_OPTIONS.map((option) => (
                      <MenuItem value={option}>{option}</MenuItem>
                    ))}
                  </FormSelect>
                </Grid>
              </>
            )}
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            p: 2,
            gap: '10px 20px',
          }}
        >
          <Button
            variant="text"
            onClick={() => {
              navigate(currentUserAccountRoute ? '/' : (-1 as any));
            }}
          >
            Close
          </Button>
          <Button variant="text" disabled={!isDirty} onClick={() => reset()}>
            Reset
          </Button>
          <Button
            type="submit"
            variant="text"
            disabled={(isValid && !isDirty) || !isValid}
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
  // eslint-disable-next-line react/jsx-props-no-spreading
}

export default UserAccount;
