import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Alert, Box, Button, Container, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import { useApolloClient, useReactiveVar } from '@apollo/client';
import { setToken } from 'utils/session';
import { currentUserVar, isLoggedInVar } from 'cache';
import FormInput from 'components/form-input-helpers/form-input';
import {
  useGetCurrentUserLazyQuery,
  useLoginMutation,
  User,
} from '../../../graphql/generated';

const schema = Yup.object({
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  password: Yup.string()
    .max(255)
    .min(8, 'Password must be a minimum of 8 characters')
    .required('Password is required'),
});

type FormInputs = {
  email: string;
  password: string;
};

function Login() {
  const location: any = useLocation();
  const client = useApolloClient();

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, touchedFields, isDirty, errors },
    setError,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [login, { loading, reset, error }] = useLoginMutation();

  const [getCurrentUser, { data: currentUserResponse }] =
    useGetCurrentUserLazyQuery();

  const currentUser = React.useMemo(
    () =>
      currentUserResponse?.me.__typename === 'User'
        ? currentUserResponse.me
        : null,
    [currentUserResponse]
  );

  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const from = location.state?.from || '/';

  useEffect(() => {
    currentUserVar(currentUser as User);
  }, [currentUser]);

  useEffect(() => {
    if (isLoggedIn) {
      getCurrentUser({
        fetchPolicy: 'network-only',
      }).then(() => {
        if (
          ['/signup', '/account/changePassword', '/resetPassword'].indexOf(
            from
          ) > -1
        ) {
          navigate('/', { replace: true });
        } else {
          navigate(from, { replace: true });
        }
      });
    }
  }, [isLoggedIn, from, navigate, getCurrentUser]);

  const onSubmit = async (values: any) => {
    try {
      await login({
        fetchPolicy: 'no-cache',
        variables: {
          input: {
            email: values.email,
            password: values.password,
          },
        },
        onCompleted: (result) => {
          if (result.login.__typename === 'LoginSuccess') {
            setToken(result.login.accessToken, client);
          } else if (result.login.__typename === 'ApiLoginError') {
            result.login.errors?.forEach((err) =>
              setError(err.field as 'email' | 'password', {
                type: 'server',
                message: err.message,
              })
            );
          }
        },
        onError: (err) => {
          // throw it and let it be handled by the Error Boundary
          console.log('Chaiwa, something bad happened', err);
        },
      });
    } catch (err) {
      // Error Boundary
      console.log('Chaiwa, Error', err);
    } finally {
      reset();
    }
  };

  return (
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        minHeight: '100%',
      }}
    >
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors['unknown' as keyof FormInputs] && !isDirty && (
            <Box>
              <Alert severity="error">
                {errors['unknown' as keyof FormInputs]?.message}. Please contact
                support or try again!
              </Alert>
            </Box>
          )}
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              Sign in
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Sign in on to the MIS
            </Typography>
          </Box>
          {(from === '/signup' ||
            from === '/account/changePassword' ||
            from === '/resetPassword') &&
            !isDirty && (
              <Box>
                <Alert severity="success">
                  Your $
                  {from === '/signup'
                    ? 'account was created'
                    : 'password was changed'}{' '}
                  successfully. Please sign-in!
                </Alert>
              </Box>
            )}
          <FormInput
            control={control}
            name="email"
            fullWidth
            label="Email Address"
            type="email"
            margin="normal"
            variant="outlined"
          />
          <FormInput
            control={control}
            name="password"
            fullWidth
            label="Password"
            margin="normal"
            type="password"
            variant="outlined"
          />
          <Box sx={{ py: 2 }}>
            <LoadingButton
              color="primary"
              disabled={
                isSubmitting ||
                (!isValid && (touchedFields.email || touchedFields.password)) ||
                loading
              }
              size="large"
              variant="contained"
              type="submit"
              fullWidth
              loading={isSubmitting || loading}
              loadingPosition="end"
            >
              {loading ? 'signing you in...' : 'Sign In'}
            </LoadingButton>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default Login;
