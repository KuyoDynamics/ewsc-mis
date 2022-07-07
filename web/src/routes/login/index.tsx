import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Box, Button, Container, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useReactiveVar } from '@apollo/client';
import { setToken } from 'utils/session';
import { isLoggedInVar } from 'cache';
import FormInput from 'components/form-input/form-input';
import { useLoginMutation } from '../../../graphql/generated';

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

  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, touchedFields },
    setError,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [login, { loading: logginIn }] = useLoginMutation();

  const isLoggedIn = useReactiveVar(isLoggedInVar);

  const from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (isLoggedIn) {
      navigate(from, { replace: true });
    }
  }, [isLoggedIn, from, navigate]);

  const onSubmit = async (values: any) => {
    login({
      fetchPolicy: 'network-only',
      variables: {
        input: {
          email: values.email,
          password: values.password,
        },
      },
      onCompleted: (result) => {
        if (result.login.__typename === 'LoginSuccess') {
          setToken(result.login.accessToken);
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
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              Sign in
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Sign in on to the MIS
            </Typography>
          </Box>
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
            <Button
              color="primary"
              disabled={
                isSubmitting ||
                (!isValid && (touchedFields.email || touchedFields.password)) ||
                logginIn
              }
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              {logginIn ? 'signing you in...' : 'Sign In'}
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default Login;
