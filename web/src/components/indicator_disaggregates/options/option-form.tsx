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
  CreateOptionInput,
  GetOptionsDocument,
  useCreateOptionMutation,
} from '../../../../graphql/generated';

const schema = Yup.object({
  option_name: Yup.string().required().min(1).max(255),
});

function DraggableOptionForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#new-country-dialog-title" />;
}
interface IOptionFormProps {
  open: boolean;
  onClose: () => void;
}

function OptionForm({ open, onClose }: IOptionFormProps) {
  const [createOption, { loading: creating }] = useCreateOptionMutation({
    refetchQueries: [GetOptionsDocument],
  });

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, isDirty },
    setError,
  } = useForm<CreateOptionInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async ({ option_name }: CreateOptionInput) => {
    createOption({
      variables: {
        input: {
          option_name,
        },
      },
      onCompleted: (result) => {
        if (result.createOption.__typename === 'Option') {
          onClose();
        } else if (result.createOption.__typename === 'ApiCreateError') {
          if (result.createOption.field) {
            setError(
              result.createOption.field as keyof CreateOptionInput,

              {
                type: 'server',
                message: result.createOption.message,
              }
            );
          } else if (
            !result.createOption.errors &&
            !result.createOption.field
          ) {
            setError('unknown' as keyof CreateOptionInput, {
              type: 'server',
              message: result.createOption.message,
            });
          } else {
            result.createOption.errors?.forEach((err) =>
              setError(err.field as keyof CreateOptionInput, {
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
      PaperComponent={DraggableOptionForm}
      aria-label="new Option form dialog"
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
          New Disaggregate Option Form
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          Add Disaggregate Option to the system
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormInput
            control={control}
            name="option_name"
            fullWidth
            label="Option Name"
            margin="normal"
            variant="outlined"
            inputProps={{
              autoCapitalize: 'on',
              autoComplete: 'off',
            }}
          />
          <Box sx={{ py: 2 }}>
            <LoadingButton
              color="primary"
              disabled={isSubmitting || !isValid || creating || !isDirty}
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

export default OptionForm;
