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
  Typography,
} from '@mui/material';
import { Info, MoreVert as MoreVertIcon } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useReactiveVar } from '@apollo/client';
import { currentUserVar } from 'cache';
import { getEnumKeys, getNameInitials, USER_THEME_OPTIONS } from 'utils';
import UserAccountMenu from './user-account-menu';
import { useGetUserQuery, UserTheme } from '../../../graphql/generated';
import FormInput from 'components/form-input-helpers/form-input';
import FormSelect from 'components/form-input-helpers/form-select';

const schema = Yup.object({
  first_name: Yup.string().max(255).required('First name is required'),
  last_name: Yup.string().max(255).required('Last name is required'),
  //  theme
});
interface LocationState {
  from: string;
  id: string;
}

interface FormInputs {
  first_name: string;
  last_name: string;
  theme: UserTheme;
}

function UserAccount() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const currentUser = useReactiveVar(currentUserVar);

  const location = useLocation();

  console.log('location', location);

  const userId = (location.state as LocationState)?.id ?? currentUser.id;

  console.log('userId', userId);

  const { data, loading, error } = useGetUserQuery({
    variables: {
      userId,
    },
  });

  // const [updateUser, {data: updatedUser, loading: updatingUser, error: userUpdateError}]=useUpdateUser

  const user = useMemo(
    () => (data?.user.__typename === 'User' ? data.user : null),
    [data]
  );

  console.log('data', data);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, touchedFields, errors },
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

  return (
    user && (
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardHeader
            subheader={
              loading ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                <div>
                  <Typography variant="subtitle1">
                    {user.email}{' '}
                    <IconButton>
                      <Info />
                    </IconButton>
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>
                    {user.disabled ? 'Disabled' : 'Active'}
                  </Typography>
                </div>
              )
            }
            title={
              loading ? (
                <Skeleton
                  animation="wave"
                  height={10}
                  width="80%"
                  style={{ marginBottom: 6 }}
                />
              ) : (
                'Profile'
              )
            }
            avatar={
              loading ? (
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
              loading ? null : (
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
            user={user}
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              {loading ? (
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
                  {/* <Grid item md={6} xs={12}> */}
                  <FormInput
                    control={control}
                    fullWidth
                    label="First name"
                    name="first_name"
                    // value={user.first_name}
                    variant="outlined"
                  />
                  {/* </Grid>
                  <Grid item md={6} xs={12}> */}
                  <FormInput
                    control={control}
                    fullWidth
                    label="Last name"
                    name="last_name"
                    // value={user.last_name}
                    variant="outlined"
                  />
                  {/* </Grid>
                  <Grid item md={6} xs={12}> */}
                  <FormSelect
                    control={control}
                    errors={errors}
                    fullWidth
                    label="Theme"
                    name="theme"
                    // value={user.theme}
                    variant="outlined"
                  >
                    {USER_THEME_OPTIONS.map((option) => (
                      <MenuItem value={option}>{option}</MenuItem>
                    ))}
                  </FormSelect>
                  {/* </Grid> */}
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
            <Button variant="text">Cancel</Button>
            <Button variant="text" disabled>
              Reset
            </Button>
            <Button type="submit" variant="text" disabled>
              Save
            </Button>
          </Box>
        </Card>
      </form>
    )
    // eslint-disable-next-line react/jsx-props-no-spreading
  );
}

export default UserAccount;
