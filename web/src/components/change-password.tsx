/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo } from 'react';
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
  FormHelperText,
  Grid,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Info } from '@mui/icons-material';
import { Link, useMatch, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useApolloClient, useReactiveVar } from '@apollo/client';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { getNameInitials } from 'utils';
import FormInput from 'components/form-input-helpers/form-input';
import { currentUserVar, isLoggedInVar } from 'cache';
import {
  useChangePasswordMutation,
  useGetUserLazyQuery,
  useUpdateUserMutation,
} from '../../graphql/generated';
import { logout } from 'utils/session';

const schema = Yup.object({
  password: Yup.string().max(255).required('Password is required'),
  new_password: Yup.string()
    .max(255)
    .min(8, 'New Password must be a minimum of 8 characters')
    .required('New Password is required'),
  confirmPassword: Yup.string()
    .required('Please retype your password.')
    .oneOf([Yup.ref('new_password')], 'Your passwords do not match.'),
  id: Yup.string()
    .uuid('No valid user found.')
    .required('You must be logged-in to use this form'),
});

interface FormInputs {
  password: string;
  confirmPassword: string;
  new_password: string;
  id: string;
  //   password_reset_token?: string;
}

type TokenPayloadType = {
  id: string;
} & JwtPayload;

function getPasswordResetUserId(token: string | null) {
  if (token) {
    const { id }: TokenPayloadType = jwtDecode(token);
    return id;
  }
  return null;
}

function ChangePassword() {
  const client = useApolloClient();

  const currentUser = useReactiveVar(currentUserVar);

  const navigate = useNavigate();

  // const [searchParams, setSearchParams] = useSearchParams();

  // const passwordResetToken = searchParams.get('id');

  // const passwordResetUserId = getPasswordResetUserId(passwordResetToken);

  // const currentUserPasswordResetRoute = useMatch('/account/changePassword');

  const userId = currentUser.id;

  const [getUser, { data, loading }] = useGetUserLazyQuery();

  const [
    changePassword,
    { data: updatedUserResponse, loading: updatingUser, error: updateError },
  ] = useChangePasswordMutation();

  const user = useMemo(
    () => (data?.user.__typename === 'User' ? data.user : null),
    [data]
  );

  const updatedUser = useMemo(
    () =>
      updatedUserResponse?.changePassword.__typename === 'User'
        ? updatedUserResponse.changePassword
        : null,
    [updatedUserResponse]
  );

  console.log('updatedUser', updatedUser);

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

  const onSubmit = ({
    // password_reset_token,
    password,
    confirmPassword,
    new_password,
    id,
  }: FormInputs) => {
    console.log('password', password);
    console.log('user_id', id);
    console.log('confirmPassword', confirmPassword);
    console.log('new_password', new_password);
    changePassword({
      variables: {
        input: {
          user_id: id,
          new_password,
          password,
        },
      },
      onCompleted: (result) => {
        if (result.changePassword.__typename === 'User') {
          logout(client);
          navigate('/login', {
            state: { from: '/account/changePassword' },
            replace: true,
          });
        } else if (result.changePassword.__typename === 'ApiUpdateError') {
          console.log('Chaiwa, ApiUpdateError', result.changePassword);

          if (result.changePassword.field) {
            setError(
              result.changePassword.field as keyof FormInputs,

              {
                type: 'server',
                message: result.changePassword.message,
              }
            );
          } else if (
            !result.changePassword.errors &&
            !result.changePassword.field
          ) {
            setError('unknown' as keyof FormInputs, {
              type: 'server',
              message: result.changePassword.message,
            });
          } else {
            result.changePassword.errors?.forEach((err) => {
              console.log('Each FieldError', err);
              return setError(err.field as keyof FormInputs, {
                type: 'server',
                message: err.message,
              });
            });
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
    if (userId) {
      setValue('id', userId, {
        shouldValidate: true,
      });
    }
  }, [userId, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              <Typography variant="h3">Change Your Account Password</Typography>
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
                <Grid item md={12} xs={12}>
                  {errors.password && (
                    <FormHelperText>
                      <Link to="/forgotPassword">Forgot password?</Link>
                    </FormHelperText>
                  )}
                  <FormInput
                    control={control}
                    fullWidth
                    label="Your Current Password"
                    name="password"
                    type="password"
                    InputProps={{
                      autoComplete: 'new-password',
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormInput
                    control={control}
                    fullWidth
                    label="New Password"
                    name="new_password"
                    type="password"
                    InputProps={{
                      autoComplete: 'new-password',
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormInput
                    control={control}
                    fullWidth
                    label="Confirm New Password"
                    name="confirmPassword"
                    type="password"
                    InputProps={{
                      autoComplete: 'new-password',
                    }}
                    variant="outlined"
                  />
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
              navigate('/');
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

export default ChangePassword;
