/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import FormInput from 'components/form-input-helpers/form-input';
import { useResetPasswordMutation } from '../../../graphql/generated';

const schema = Yup.object({
  password: Yup.string().max(255).required('Password is required'),
  confirmPassword: Yup.string()
    .required('Please retype your password.')
    .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
  hashed_password_reset_token: Yup.string().required(
    'A valid token is required'
  ),
});

interface FormInputs {
  password: string;
  confirmPassword: string;
  hashed_password_reset_token: string;
  email?: string;
}

type TokenPayloadType = {
  id: string;
  email: string;
} & JwtPayload;

function decodePasswordRestToken(token: string | null) {
  if (token) {
    const { id, email }: TokenPayloadType = jwtDecode(token);
    return { id, email };
  }
  return { id: null, email: null };
}

function ResetPassword() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const passwordResetToken = searchParams.get('token');

  const { email } = decodePasswordRestToken(passwordResetToken);

  const [resetPassword, { loading }] = useResetPasswordMutation();

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty, errors },
    reset,
    register,
    setValue,
    setError,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  console.log('Errors', errors);

  const onSubmit = ({
    password,
    confirmPassword,
    hashed_password_reset_token,
  }: FormInputs) => {
    console.log('password', password);
    console.log('user_id', hashed_password_reset_token);
    console.log('confirmPassword', confirmPassword);
    resetPassword({
      variables: {
        input: {
          hashed_password_reset_token,
          password,
        },
      },
      onCompleted: (result) => {
        console.log('Password Reset Result', result);
        if (result.resetPassword.__typename === 'User') {
          navigate('/login', {
            state: { from: '/resetPassword' },
            replace: true,
          });
        } else if (
          result.resetPassword.__typename === 'ApiPasswordResetError'
        ) {
          if (result.resetPassword.field) {
            setError(
              result.resetPassword.field as keyof FormInputs,

              {
                type: 'server',
                message: result.resetPassword.message,
              }
            );
          } else if (
            !result.resetPassword.errors &&
            !result.resetPassword.field
          ) {
            setError('unknown' as keyof FormInputs, {
              type: 'server',
              message: result.resetPassword.message,
            });
          } else {
            result.resetPassword.errors?.forEach((err) => {
              return setError(err.field as keyof FormInputs, {
                type: 'server',
                message: err.message,
              });
            });
          }
        }
      },
      onError: (er) => {
        // throw it and let it be handled by the Error Boundary
        console.log('Chaiwa, something bad happened', er);
      },
    });
  };

  useEffect(() => {
    if (passwordResetToken) {
      setValue('hashed_password_reset_token', passwordResetToken, {
        shouldValidate: true,
      });
    }
  }, [passwordResetToken, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        {(errors.hashed_password_reset_token ||
          errors.email ||
          errors['unknown' as keyof FormInputs]) && (
          <Box>
            <Alert severity="error">
              {errors.hashed_password_reset_token?.message ||
                errors.email?.message ||
                errors['unknown' as keyof FormInputs]?.message}
              . Please contact support or try again!
            </Alert>
          </Box>
        )}
        <CardHeader
          subheader={
            <div>
              <Typography variant="subtitle1">{email}</Typography>
            </div>
          }
          title={
            <Typography variant="h3">Change Your Account Password</Typography>
          }
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <>
              <Grid item md={12} xs={12}>
                <FormInput
                  control={control}
                  fullWidth
                  label="Your New Password"
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
                id="hashed_password_reset_token"
                type="hidden"
                required
                {...register('hashed_password_reset_token')}
              />
            </>
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
          <Button
            variant="text"
            disabled={!isDirty || loading}
            onClick={() => reset()}
          >
            Reset
          </Button>
          <Button
            type="submit"
            variant="text"
            disabled={(isValid && !isDirty) || !isValid || loading}
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
  // eslint-disable-next-line react/jsx-props-no-spreading
}

export default ResetPassword;
