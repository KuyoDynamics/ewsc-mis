/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo, useContext } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { AppContext } from 'context/app-context';
import { ActionTypes } from 'context/reducer';
import { useRequestPasswordResetMutation } from '../../../graphql/generated';

const schema = Yup.object({
  email: Yup.string().email('Invalid email').required(),
});

interface FormInputs {
  email: string;
}

interface RequestPasswordResetModalProps {
  open: boolean;
  handleClose: () => void;
  email: string;
  name: string;
}

function RequestPasswordResetModal({
  open,
  handleClose,
  email,
  name,
}: RequestPasswordResetModalProps) {
  const { dispatch } = useContext(AppContext);

  const [requestPasswordReset, { data, loading, error: error }] =
    useRequestPasswordResetMutation();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    setValue,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = ({ email: emailInput }: FormInputs) => {
    requestPasswordReset({
      variables: {
        input: {
          email: emailInput,
        },
      },
      onCompleted: (result) => {
        if (result.requestPasswordReset.__typename === 'User') {
          handleClose();
          dispatch({
            type: ActionTypes.ShowToast,
            payload: {
              message: 'Password reset request sent!',
              severity: 'success',
              open: true,
            },
          });
        } else if (
          result.requestPasswordReset.__typename === 'ApiUpdateError'
        ) {
          if (result.requestPasswordReset.field) {
            setError(
              result.requestPasswordReset.field as keyof FormInputs,

              {
                type: 'server',
                message: result.requestPasswordReset.message,
              }
            );
          } else if (
            !result.requestPasswordReset.errors &&
            !result.requestPasswordReset.field
          ) {
            setError('unknown' as keyof FormInputs, {
              type: 'server',
              message: result.requestPasswordReset.message,
            });
          } else {
            result.requestPasswordReset.errors?.forEach((err) => {
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

  useEffect(() => {
    register('email');
  }, [register]);

  useEffect(() => {
    if (email) {
      setValue('email', email, { shouldValidate: true });
    }
  }, [email, setValue]);

  return (
    <Dialog
      id="request-password-reset-dialog"
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      keepMounted
      transitionDuration={{
        exit: 300,
      }}
    >
      {(errors.email || errors['unknown' as keyof FormInputs]) && (
        <Box>
          <Alert severity="error">
            {errors.email?.message ||
              errors['unknown' as keyof FormInputs]?.message}
            . Please contact support or try again!
          </Alert>
        </Box>
      )}
      <DialogTitle variant="h4">Confirm Request Password Reset</DialogTitle>
      <DialogContent dividers>
        <Typography variant="h5">
          Are you sure you want to ask {name} to reset password?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={() => handleClose()} disabled={loading}>
          No
        </Button>
        <Box sx={{ py: 2 }}>
          <LoadingButton
            onClick={() => handleSubmit(onSubmit)()}
            color="primary"
            disabled={loading}
            size="small"
            variant="text"
            loading={loading}
            loadingPosition="end"
          >
            Yes
          </LoadingButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default RequestPasswordResetModal;
