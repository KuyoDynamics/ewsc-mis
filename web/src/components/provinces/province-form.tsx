/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  PaperProps,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from 'react-hook-form';
import DraggablePaper from 'components/draggable-paper';
import FormInput from 'components/form-input-helpers/form-input';
import FormSelect from 'components/form-input-helpers/form-select';
import {
  CreateProvinceInput,
  GetProvincesDocument,
  useCreateProvinceMutation,
  useGetCountriesQuery,
} from '../../../graphql/generated';

const schema = Yup.object({
  code: Yup.string().required().min(5).max(5).uppercase(),
  name: Yup.string().required().min(4).max(255),
  country_id: Yup.string().uuid().required(),
});

function DraggableProvinceForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#new-country-dialog-title" />;
}
interface IProvinceFormProps {
  open: boolean;
  onClose: () => void;
  selectedCountryId: string;
}

function ProvinceForm({
  open,
  onClose,
  selectedCountryId,
}: IProvinceFormProps) {
  const [createProvince, { loading: creating }] = useCreateProvinceMutation({
    refetchQueries: [GetProvincesDocument],
  });

  const { data } = useGetCountriesQuery();

  const countries = useMemo(
    () => data?.countries?.map((c) => ({ name: c.name, id: c.id })),
    [data]
  );

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors, isDirty },
    setError,
  } = useForm<CreateProvinceInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async ({ code, name, country_id }: CreateProvinceInput) => {
    createProvince({
      variables: {
        input: {
          code: code.toUpperCase(),
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
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormSelect
            control={control}
            name="country_id"
            errors={errors}
            defaultValue={selectedCountryId}
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
          >
            {countries &&
              countries.map((country) => (
                <MenuItem value={country.id}>{country.name}</MenuItem>
              ))}
          </FormSelect>
          <FormInput
            control={control}
            name="name"
            fullWidth
            label="Province Name"
            margin="normal"
            variant="outlined"
            inputProps={{
              autoCapitalize: 'on',
              autoComplete: 'off',
            }}
          />
          <FormInput
            control={control}
            name="code"
            fullWidth
            label="Province Code"
            margin="normal"
            variant="outlined"
            inputProps={{
              style: { textTransform: 'uppercase' },
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

export default ProvinceForm;
