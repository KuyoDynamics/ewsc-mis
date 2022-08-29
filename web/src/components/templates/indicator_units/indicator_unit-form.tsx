/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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
import { useForm, useWatch } from 'react-hook-form';
import DraggablePaper from 'components/draggable-paper';
import FormInput from 'components/form-input-helpers/form-input';
import {
  CreateIndicatorUnitInput,
  GetIndicatorUnitsDocument,
  useCreateIndicatorUnitMutation,
} from '../../../../graphql/generated';

const schema = Yup.object({
  unit: Yup.string()
    .required()
    .transform((value, oValue) => {
      console.log('value', value);
      console.log('oValue', oValue);
      return value.toLowerCase();
    }),
  display_name: Yup.string().required(),
});

function DraggableIndicatorUnitForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#new-country-dialog-title" />;
}
interface IIndicatorUnitFormProps {
  open: boolean;
  onClose: () => void;
}

function IndicatorUnitForm({ open, onClose }: IIndicatorUnitFormProps) {
  const [createIndicatorUnit, { loading: creating }] =
    useCreateIndicatorUnitMutation({
      refetchQueries: [GetIndicatorUnitsDocument],
    });

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors, isDirty },
    setError,
  } = useForm<CreateIndicatorUnitInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async ({ display_name, unit }: CreateIndicatorUnitInput) => {
    createIndicatorUnit({
      variables: {
        input: {
          display_name,
          unit,
        },
      },
      onCompleted: (result) => {
        if (result.createIndicatorUnit.__typename === 'IndicatorUnit') {
          onClose();
        } else if (result.createIndicatorUnit.__typename === 'ApiCreateError') {
          if (result.createIndicatorUnit.field) {
            setError(
              result.createIndicatorUnit
                .field as keyof CreateIndicatorUnitInput,

              {
                type: 'server',
                message: result.createIndicatorUnit.message,
              }
            );
          } else if (
            !result.createIndicatorUnit.errors &&
            !result.createIndicatorUnit.field
          ) {
            setError('unknown' as keyof CreateIndicatorUnitInput, {
              type: 'server',
              message: result.createIndicatorUnit.message,
            });
          } else {
            result.createIndicatorUnit.errors?.forEach((err) =>
              setError(err.field as keyof CreateIndicatorUnitInput, {
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
      PaperComponent={DraggableIndicatorUnitForm}
      aria-label="new IndicatorUnit form dialog"
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
          New Indicator Unit Form
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          Add new Indicator Unit to the system
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormInput
            control={control}
            name="display_name"
            fullWidth
            label="Display Name"
            margin="normal"
            variant="outlined"
            inputProps={{
              autoCapitalize: 'on',
              autoComplete: 'off',
            }}
          />

          <FormInput
            control={control}
            name="unit"
            fullWidth
            label="Unit"
            margin="normal"
            variant="outlined"
            inputProps={{
              autoComplete: 'off',
            }}
          />

          <Box sx={{ py: 2 }}>
            <LoadingButton
              color="primary"
              disabled={isSubmitting || !isValid || creating}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting || creating}
              loadingPosition="end"
            >
              {isSubmitting || creating ? 'Saving...' : 'Create'}
            </LoadingButton>
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default IndicatorUnitForm;
