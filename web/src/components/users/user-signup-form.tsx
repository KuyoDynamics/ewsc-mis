/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  Container,
  Typography,
  Link as MUILink,
  Alert,
} from '@mui/material';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import FormInput from 'components/form-input-helpers/form-input';
import { useCreateInvitedUserMutation } from '../../../graphql/generated';

const schema = Yup.object({
  email: Yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),
  first_name: Yup.string().max(255).required('First name is required'),
  last_name: Yup.string().max(255).required('Last name is required'),
  password: Yup.string()
    .max(255)
    .min(8, 'Password must be a minimum of 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Please retype your password.')
    .oneOf([Yup.ref('password')], 'Your passwords do not match.'),
  user_invitation_id: Yup.string()
    .uuid('No valid invitation found. This form is only for invited users')
    .required('This form is only for invited users'),
});

interface FormInputs {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword: string;
  user_invitation_id: string;
}

function UserSignUpForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  const invitationId = searchParams?.get('id') ?? '';

  const navigate = useNavigate();
  const [signup, { loading: creatingAccount }] = useCreateInvitedUserMutation();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, touchedFields, errors },
    setError,
    register,
    setValue,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit = ({
    user_invitation_id,
    last_name,
    first_name,
    email,
    password,
  }: FormInputs) => {
    signup({
      fetchPolicy: 'network-only',
      variables: {
        input: {
          user_invitation_id,
          email,
          first_name,
          last_name,
          password,
        },
      },
      onCompleted: (result) => {
        if (result.createInvitedUser.__typename === 'User') {
          navigate('/login', { state: { from: '/signup' }, replace: true });
        } else if (result.createInvitedUser.__typename === 'ApiCreateError') {
          if (result.createInvitedUser.field) {
            setError(
              result.createInvitedUser.field as keyof FormInputs,

              {
                type: 'server',
                message: result.createInvitedUser.message,
              }
            );
          } else if (
            !result.createInvitedUser.errors &&
            !result.createInvitedUser.field
          ) {
            setError('unknown' as keyof FormInputs, {
              type: 'server',
              message: result.createInvitedUser.message,
            });
          } else {
            result.createInvitedUser.errors?.forEach((err) =>
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

  useEffect(() => {
    setValue('user_invitation_id', invitationId, {
      shouldValidate: true,
    });
  }, [invitationId, setValue]);

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
              Create a new account
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              Use email to which the invitation was sent
            </Typography>
          </Box>
          {(errors.user_invitation_id ||
            errors['unknown' as keyof FormInputs]) && (
            <Box>
              <Alert severity="error">
                {errors.user_invitation_id?.message ||
                  errors['unknown' as keyof FormInputs]?.message}
                . Please contact support or try again!
              </Alert>
            </Box>
          )}
          <FormInput
            control={control}
            name="email"
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
          />
          <FormInput
            control={control}
            name="first_name"
            fullWidth
            label="First Name"
            margin="normal"
            variant="outlined"
          />
          <FormInput
            control={control}
            name="last_name"
            fullWidth
            label="Last Name"
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
            autoComplete="new-password"
            inputProps={{
              autoComplete: 'new-password',
              autoSave: 'off',
            }}
            variant="outlined"
          />
          <FormInput
            control={control}
            name="confirmPassword"
            fullWidth
            label="Confirm Password"
            margin="normal"
            type="password"
            variant="outlined"
          />
          <input
            id="user_invitation_id"
            type="hidden"
            required
            {...register('user_invitation_id')}
          />
          <Box sx={{ py: 2 }}>
            <Button
              color="primary"
              disabled={isSubmitting || !isValid || creatingAccount}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              {creatingAccount ? 'Signing you up...' : 'Sign Up'}
            </Button>
          </Box>
          <Typography color="textSecondary" variant="body2">
            Have an account?{' '}
            <Link to="/login">
              <MUILink variant="subtitle2" underline="hover">
                Sign In
              </MUILink>
            </Link>
          </Typography>
        </form>
      </Container>
    </Box>
  );
}

export default UserSignUpForm;
