/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FormInput from 'components/form-input-helpers/form-input';
import LoadingButton from '@mui/lab/LoadingButton';

const schema = Yup.object({
  password: Yup.string().max(255).required('Password is required'),
});

interface FormInputs {
  email: string;
}

function RequestPasswordReset() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const location = useLocation();

  const { email: emailFromState, name } = location.state as {
    email?: string;
    name?: string;
  };

  //   const [requestPasswordReset, { data, loading, error: error }] =
  //     useChangePasswordMutation();

  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty, errors },
    reset,
    register,
    setValue,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = ({ email }: FormInputs) => {
    console.log('email in onSubmit', email);
    // requestPasswordReset({
    //   variables: {
    //     input: {
    //       email,
    //     },
    //   },
    //   onCompleted: (result) => {
    //     if (result.changePassword.__typename === 'User') {
    //       logout(client);
    //       navigate('/login', {
    //         state: { from: '/account/changePassword' },
    //         replace: true,
    //       });
    //     } else if (result.changePassword.__typename === 'ApiUpdateError') {
    //       console.log('Chaiwa, ApiUpdateError', result.changePassword);

    //       if (result.changePassword.field) {
    //         setError(
    //           result.changePassword.field as keyof FormInputs,

    //           {
    //             type: 'server',
    //             message: result.changePassword.message,
    //           }
    //         );
    //       } else if (
    //         !result.changePassword.errors &&
    //         !result.changePassword.field
    //       ) {
    //         setError('unknown' as keyof FormInputs, {
    //           type: 'server',
    //           message: result.changePassword.message,
    //         });
    //       } else {
    //         result.changePassword.errors?.forEach((err) => {
    //           console.log('Each FieldError', err);
    //           return setError(err.field as keyof FormInputs, {
    //             type: 'server',
    //             message: err.message,
    //           });
    //         });
    //       }
    //     }
    //   },
    //   onError: (err) => {
    //     // throw it and let it be handled by the Error Boundary
    //     console.log('Chaiwa, something bad happened', err);
    //   },
    // });
  };

  useEffect(() => {
    if (emailFromState) {
      register('email');
    }
  }, [emailFromState, register]);

  if (emailFromState) {
    return (
      <Dialog
        id="request-password-reset-dialog"
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        open={open}
        keepMounted
        transitionDuration={{
          exit: 1000,
        }}
      >
        <DialogTitle variant="h4">Confirm Request Password Reset</DialogTitle>
        <DialogContent dividers>
          <Typography variant="h3">
            `Are you sure you want to ask ${name} to reset password?`
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => setOpen(false)}
            //   disabled={loading}
          >
            No
          </Button>
          {/* <Box sx={{ py: 2 }}> */}

          <LoadingButton
            onClick={() => setValue('email', emailFromState)}
            color="primary"
            // disabled={loading}
            size="small"
            variant="text"
            // loading={loading}
            loadingPosition="end"
          >
            Yes
          </LoadingButton>
          {/* </Box> */}
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {errors['unknown' as keyof FormInputs] && (
        <Box>
          <Alert severity="error">
            {errors['unknown' as keyof FormInputs]?.message}. Please contact
            support or try again!
          </Alert>
        </Box>
      )}
      <Card>
        <CardHeader
          title={<Typography variant="h3">Request Password Reset</Typography>}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <FormInput
                control={control}
                fullWidth
                label="Your Email"
                name="email"
                type="email"
                variant="outlined"
              />
            </Grid>
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
              navigate(-1 as any);
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

export default RequestPasswordReset;
