/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
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
import {
  GetUserDocument,
  useCancelRequestPasswordResetMutation,
} from '../../../graphql/generated';

const schema = Yup.object({
  userId: Yup.string().uuid('Invalid user id').required(),
});

interface FormInputs {
  userId: string;
}

interface RequestPasswordResetModalProps {
  open: boolean;
  handleClose: () => void;
  userId: string;
}

function CancelPasswordResetModal({
  open,
  handleClose,
  userId,
}: RequestPasswordResetModalProps) {
  const [cancelPasswordReset, { loading }] =
    useCancelRequestPasswordResetMutation();

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

  const onSubmit = ({ userId: userIdInput }: FormInputs) => {
    cancelPasswordReset({
      variables: {
        input: {
          user_id: userIdInput,
        },
      },
      refetchQueries: [
        {
          query: GetUserDocument,
          variables: {
            userId,
          },
        },
      ],
      awaitRefetchQueries: true,
      onCompleted: (result) => {
        if (result.cancelRequestPasswordReset.__typename === 'User') {
          handleClose();
        } else if (
          result.cancelRequestPasswordReset.__typename === 'ApiUpdateError'
        ) {
          if (result.cancelRequestPasswordReset.field) {
            setError(
              result.cancelRequestPasswordReset.field as keyof FormInputs,

              {
                type: 'server',
                message: result.cancelRequestPasswordReset.message,
              }
            );
          } else if (
            !result.cancelRequestPasswordReset.errors &&
            !result.cancelRequestPasswordReset.field
          ) {
            setError('unknown' as keyof FormInputs, {
              type: 'server',
              message: result.cancelRequestPasswordReset.message,
            });
          } else {
            result.cancelRequestPasswordReset.errors?.forEach((err) => {
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
    register('userId');
  }, [register]);

  useEffect(() => {
    if (userId) {
      setValue('userId', userId, { shouldValidate: true });
    }
  }, [userId, setValue]);

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
      {(errors.userId || errors['unknown' as keyof FormInputs]) && (
        <Box>
          <Alert severity="error">
            {errors.userId?.message ||
              errors['unknown' as keyof FormInputs]?.message}
            . Please contact support or try again!
          </Alert>
        </Box>
      )}
      <DialogTitle variant="h4">
        Confirm Cancel Request Password Reset
      </DialogTitle>
      <DialogContent dividers>
        <Typography variant="h5">
          Are you sure you want to cancel this request to reset password?
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

export default CancelPasswordResetModal;
