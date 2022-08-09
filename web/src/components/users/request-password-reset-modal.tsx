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
  email: Yup.string().email('Invalid email').required(),
});

interface FormInputs {
  email: string;
}

interface RequestPasswordResetModalProps {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
  email: string;
  name: string;
}

function RequestPasswordResetModal({
  open,
  handleClose,
  anchorEl,
  email,
  name,
}: RequestPasswordResetModalProps) {
  // const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const location = useLocation();

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

  console.log('errors', errors);

  const onSubmit = ({ email: emailInput }: FormInputs) => {
    // console.log('Chaiwa???');
    console.log('email in onSubmit', emailInput);
    setTimeout(() => handleClose(), 500);

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
        exit: 1000,
      }}
    >
      <DialogTitle variant="h4">Confirm Request Password Reset</DialogTitle>
      <DialogContent dividers>
        <Typography variant="h5">
          Are you sure you want to ask {name} to reset password?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={() => handleClose()}
          //   disabled={loading}
        >
          No
        </Button>
        <Box sx={{ py: 2 }}>
          <LoadingButton
            onClick={() => handleSubmit(onSubmit)()}
            color="primary"
            // disabled={loading}
            size="small"
            variant="text"
            // loading={loading}
            loadingPosition="end"
            // type="button"
          >
            Yes
          </LoadingButton>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default RequestPasswordResetModal;
