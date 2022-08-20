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
import { useForm } from 'react-hook-form';
import DraggablePaper from 'components/draggable-paper';
import FormInput from 'components/form-input-helpers/form-input';
import {
  CreateProvinceInput,
  GetProvincesDocument,
  useCreateProvinceMutation,
} from '../../../graphql/generated';

const schema = Yup.object({
  code: Yup.string().required(),
  name: Yup.string().required(),
  country_id: Yup.string().uuid().required(),
});

function DraggableProvinceForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#new-country-dialog-title" />;
}

interface IProvinceFormProps {
  open: boolean;
  onClose: () => void;
}

function ProvinceForm({ open, onClose }: IProvinceFormProps) {
  const [createProvince, { loading }] = useCreateProvinceMutation({
    refetchQueries: [GetProvincesDocument],
  });
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
    setError,
  } = useForm<CreateProvinceInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const submitting = isSubmitting || loading;

  const onSubmit = async ({ code, name, country_id }: CreateProvinceInput) => {
    createProvince({
      variables: {
        input: {
          code,
          name,
          country_id,
        },
      },
      onCompleted: (result) => {
        if (result.createProvince.__typename === 'Province') {
          onClose();
        } else if (result.createProvince.__typename === 'ApiCreateError') {
          if (result.createProvince.field) {
            setError(
              result.createProvince.field as keyof CreateProvinceInput,

              {
                type: 'server',
                message: result.createProvince.message,
              }
            );
          } else if (
            !result.createProvince.errors &&
            !result.createProvince.field
          ) {
            setError('unknown' as keyof CreateProvinceInput, {
              type: 'server',
              message: result.createProvince.message,
            });
          } else {
            result.createProvince.errors?.forEach((err) =>
              setError(err.field as keyof CreateProvinceInput, {
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
      PaperComponent={DraggableProvinceForm}
      aria-label="new Province form dialog"
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
          New Province Form
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          Add new Province to the system
        </Typography>
      </DialogTitle>
      <DialogContent>
        {/* Refactor this into its own component so it can re-render */}
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default ProvinceForm;
