/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  PaperProps,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from 'react-hook-form';
import DraggablePaper from 'components/draggable-paper';
import FormInput from 'components/form-input-helpers/form-input';
import {
  CreateCountryInput,
  GetCountriesDocument,
  useCreateCountryMutation,
} from '../../../graphql/generated';

const schema = Yup.object({
  code: Yup.string().required(),
  name: Yup.string().required(),
});

function DraggableCountryForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#new-country-dialog-title" />;
}

interface ICountryFormProps {
  open: boolean;
  onClose: () => void;
}

function CountryForm({ open, onClose }: ICountryFormProps) {
  const [createCountry, { data, loading, error }] = useCreateCountryMutation({
    refetchQueries: [GetCountriesDocument],
  });
  console.log('data', data);
  console.log('loading', loading);
  console.log('error', error);
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
    setError,
    reset,
  } = useForm<CreateCountryInput>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  console.log('errors', errors);

  const submitting = isSubmitting || loading;

  const onSubmit = async ({ code, name, flag }: CreateCountryInput) => {
    createCountry({
      variables: {
        input: {
          code,
          name,
          flag,
        },
      },
      onCompleted: (result) => {
        if (result.createCountry.__typename === 'Country') {
          //   navigate('/login', { state: { from: '/signup' }, replace: true });
          onClose();
        } else if (result.createCountry.__typename === 'ApiCreateError') {
          if (result.createCountry.field) {
            setError(
              result.createCountry.field as keyof CreateCountryInput,

              {
                type: 'server',
                message: result.createCountry.message,
              }
            );
          } else if (
            !result.createCountry.errors &&
            !result.createCountry.field
          ) {
            setError('unknown' as keyof CreateCountryInput, {
              type: 'server',
              message: result.createCountry.message,
            });
          } else {
            result.createCountry.errors?.forEach((err) =>
              setError(err.field as keyof CreateCountryInput, {
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

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperComponent={DraggableCountryForm}
      aria-label="new country form dialog"
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '500px',
          },
        },
      }}
    >
      <DialogTitle id="user-inivation-dialog-title">
        <Typography color="textPrimary" variant="h4">
          New Country Form
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          Add new country to the system
        </Typography>
      </DialogTitle>
      <DialogContent>
        {/* Refactor this into its own component so it can re-render */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            control={control}
            name="code"
            fullWidth
            label="Code"
            margin="normal"
            variant="outlined"
            inputProps={{
              style: { textTransform: 'uppercase' },
            }}
          />
          <FormInput
            control={control}
            name="name"
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
            inputProps={{
              autoCapitalize: 'on',
            }}
          />
          <Box sx={{ py: 2 }}>
            <LoadingButton
              color="primary"
              disabled={submitting || !isValid}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={submitting}
              loadingPosition="end"
            >
              {submitting ? 'Saving...' : 'Create'}
            </LoadingButton>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CountryForm;
