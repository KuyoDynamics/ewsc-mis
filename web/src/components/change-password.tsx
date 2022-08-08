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
  Grid,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Info } from '@mui/icons-material';
import { useMatch, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useReactiveVar } from '@apollo/client';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { getNameInitials } from 'utils';
import FormInput from 'components/form-input-helpers/form-input';
import { currentUserVar } from 'cache';
import {
  useGetUserLazyQuery,
  useUpdateUserMutation,
} from '../../graphql/generated';

const schema = Yup.object({
  password: Yup.string()
    .max(255)
    .min(8, 'Password must be a minimum of 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Please retype your password.')
    .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
  //   password_reset_token: Yup.string()
  //     .uuid('No valid invitation found. This form is only for invited users')
  //     .required('This form is only for invited users'),
});

interface FormInputs {
  password: string;
  confirmPassword: string;
  current_password?: string;
  password_reset_token?: string;
}

type TokenPayloadType = {
  id: string;
} & JwtPayload;

function ChangePassword() {
  const currentUser = useReactiveVar(currentUserVar);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const passwordResetToken = searchParams.get('token');

  const { id: passwordResetUserId }: TokenPayloadType = jwtDecode(
    passwordResetToken!
  );

  const currentUserPasswordResetRoute = useMatch('/account/changePassword');

  const userId = currentUserPasswordResetRoute
    ? currentUser.id
    : passwordResetUserId;

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

  const onSubmit = ({ password, password_reset_token }: FormInputs) => {
    console.log('password', password);
    console.log('password_reset_token', password_reset_token);
    // updateUser({
    //   variables: {
    //     input: {
    //       id,
    //       update: {
    //         first_name,
    //         last_name,
    //         theme,
    //       },
    //     },
    //   },
    //   onCompleted: (result) => {
    //     if (result.updateUser.__typename === 'User') {
    //       // Do nothing for now
    //     } else if (result.updateUser.__typename === 'ApiCreateError') {
    //       if (result.updateUser.field) {
    //         setError(
    //           result.updateUser.field as keyof FormInputs,

    //           {
    //             type: 'server',
    //             message: result.updateUser.message,
    //           }
    //         );
    //       } else if (!result.updateUser.errors && !result.updateUser.field) {
    //         setError('unknown' as keyof FormInputs, {
    //           type: 'server',
    //           message: result.updateUser.message,
    //         });
    //       } else {
    //         result.updateUser.errors?.forEach((err) =>
    //           setError(err.field as keyof FormInputs, {
    //             type: 'server',
    //             message: err.message,
    //           })
    //         );
    //       }
    //     }
    //   },
    //   onError: (err) => {
    //     // throw it and let it be handled by the Error Boundary
    //     console.log('Chaiwa, something bad happened', err);
    //   },
    // });
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
    if (passwordResetToken) {
      setValue('password_reset_token', passwordResetToken, {
        shouldValidate: true,
      });
    }
  }, [passwordResetToken, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {(errors.password_reset_token ||
        errors['unknown' as keyof FormInputs]) && (
        <Box>
          <Alert severity="error">
            {errors.password_reset_token?.message ||
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
                    fullWidth
                    label="Your Current Password"
                    name="current_password"
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
                    label="Confirm New Password"
                    name="confirmPassword"
                    type="password"
                    InputProps={{
                      autoComplete: 'new-password',
                    }}
                    variant="outlined"
                  />
                </Grid>
                <input
                  id="password_reset_token"
                  type="hidden"
                  required
                  {...register('password_reset_token')}
                />
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
