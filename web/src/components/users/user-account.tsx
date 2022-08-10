/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
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
  Tooltip,
  Typography,
} from '@mui/material';
import { Info, MoreVert as MoreVertIcon } from '@mui/icons-material';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useReactiveVar } from '@apollo/client';
import { getNameInitials, USER_THEME_OPTIONS } from 'utils';
import FormInput from 'components/form-input-helpers/form-input';
import FormSelect from 'components/form-input-helpers/form-select';
import UserAccountMenu from 'components/users/user-account-menu';
import { currentUserVar } from 'cache';
import {
  useGetUserLazyQuery,
  UserTheme,
  useUpdateUserMutation,
} from '../../../graphql/generated';
import RequestPasswordResetModal from './request-password-reset-modal';

const schema = Yup.object({
  first_name: Yup.string().max(255).required('First name is required'),
  last_name: Yup.string().max(255).required('Last name is required'),
  id: Yup.string()
    .uuid('Invalid user id detected.')
    .required('User is required'),
});

interface FormInputs {
  first_name: string;
  last_name: string;
  theme: UserTheme;
  id: string;
}

function UserAccount() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(Boolean(anchorEl));
  const [openPasswordResetModal, setOpenPasswordResetModal] = useState(false);

  const currentUser = useReactiveVar(currentUserVar);

  // const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const params = useParams();

  const currentUserAccountRoute = useMatch('/account');

  const userId = currentUserAccountRoute ? currentUser?.id : params?.id;

  const [getUser, { data, loading }] = useGetUserLazyQuery();

  const [
    updateUser,
    { data: updatedUserResponse, loading: updatingUser, error: updateError },
  ] = useUpdateUserMutation();

  const user = useMemo(
    () => (data?.user.__typename === 'User' ? data.user : null),
    [data]
  );

  const updatedUser = useMemo(
    () =>
      updatedUserResponse?.updateUser.__typename === 'User'
        ? updatedUserResponse.updateUser
        : null,
    [updatedUserResponse]
  );

  const isCurrentUser = currentUser.id === user?.id;

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty, touchedFields, errors },
    reset,
    register,
    setValue,
    setError,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    // setAnchorEl(null);
    setOpen(false);
  };

  const handleOpenPasswordResetModal = () => {
    setOpenPasswordResetModal(true);
  };

  const handleClosePasswordResetModal = () => {
    setOpenPasswordResetModal(false);
  };

  const onSubmit = ({ first_name, last_name, theme, id }: FormInputs) => {
    updateUser({
      variables: {
        input: {
          id,
          update: {
            first_name,
            last_name,
            theme,
          },
        },
      },
      onCompleted: (result) => {
        if (result.updateUser.__typename === 'User') {
          // Do nothing for now
        } else if (result.updateUser.__typename === 'ApiCreateError') {
          if (result.updateUser.field) {
            setError(
              result.updateUser.field as keyof FormInputs,

              {
                type: 'server',
                message: result.updateUser.message,
              }
            );
          } else if (!result.updateUser.errors && !result.updateUser.field) {
            setError('unknown' as keyof FormInputs, {
              type: 'server',
              message: result.updateUser.message,
            });
          } else {
            result.updateUser.errors?.forEach((err) =>
              setError(err.field as keyof FormInputs, {
                type: 'server',
                message: err.message,
              })
            );
          }
        }
      },
      onError: (err) => {
        // throw it and let it be handled by the Error Boundary
        console.log('Chaiwa, something bad happened', err);
      },
    });
  };

  const isLoading = loading || !user;

  useEffect(() => {
    if (userId) {
      getUser({
        variables: {
          userId,
        },
      });
    }
  }, [userId, getUser]);

  useEffect(() => {
    if (user) {
      reset({
        first_name: user.first_name,
        last_name: user.last_name,
        theme: user.theme as UserTheme,
      });
    }
  }, [user, reset]);

  useEffect(() => {
    if (userId) {
      setValue('id', userId, {
        shouldValidate: true,
      });
    }
  }, [userId, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {updatedUser && isValid && Object.values(touchedFields).length === 0 && (
        <Box>
          <Alert severity="success">Changes saved successfully.</Alert>
        </Box>
      )}
      {(errors.id || errors['unknown' as keyof FormInputs]) && (
        <Box>
          <Alert severity="error">
            {errors.id?.message ||
              errors['unknown' as keyof FormInputs]?.message}
            . Please contact support or try again!
          </Alert>
        </Box>
      )}
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
                {getNameInitials(user.first_name, user.last_name)}
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
          handleOpenPasswordResetModal={handleOpenPasswordResetModal}
        />
        <RequestPasswordResetModal
          open={openPasswordResetModal}
          handleClose={handleClosePasswordResetModal}
          email={user?.email!}
          name={user?.first_name!}
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
                <input id="id" type="hidden" required {...register('id')} />
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
