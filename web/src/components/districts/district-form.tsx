/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  PaperProps,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from 'react-hook-form';
import DraggablePaper from 'components/draggable-paper';
import FormInput from 'components/form-input-helpers/form-input';
import FormSelect from 'components/form-input-helpers/form-select';
import {
  CreateDistrictInput,
  GetDistrictsDocument,
  useCreateDistrictMutation,
  useGetCountriesQuery,
  useGetProvincesQuery,
} from '../../../graphql/generated';

const schema = Yup.object({
  code: Yup.string().required().min(8).max(8).uppercase(),
  name: Yup.string().required().min(4).max(255),
  province_id: Yup.string().uuid().required(),
});

function DraggableDistrictForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#new-country-dialog-title" />;
}
interface IDistrictFormProps {
  open: boolean;
  onClose: () => void;
  selectedCountryId: string;
  selectedProvinceId: string;
}

function DistrictForm({
  open,
  onClose,
  selectedCountryId,
  selectedProvinceId,
}: IDistrictFormProps) {
  const [countryId, setCountryId] = useState(selectedCountryId);

  const [createDistrict, { loading: creating }] = useCreateDistrictMutation({
    refetchQueries: [GetDistrictsDocument],
  });

  const { data: countryData } = useGetCountriesQuery();

  const countries = useMemo(
    () => countryData?.countries?.map((c) => ({ name: c.name, id: c.id })),
    [countryData]
  );

  const { data: provinceData } = useGetProvincesQuery({
    variables: {
      countryId: selectedCountryId,
    },
  });

  const provinces = useMemo(
    () => provinceData?.provinces?.map((p) => ({ name: p.name, id: p.id })),
    [provinceData]
  );

  const handleCountrySelectionChange = (event: SelectChangeEvent) => {
    setCountryId(event.target.value);
  };

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors, isDirty },
    setError,
  } = useForm<CreateDistrictInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async ({ code, name, province_id }: CreateDistrictInput) => {
    createDistrict({
      variables: {
        input: {
          code: code.toUpperCase(),
          name,
          province_id,
        },
      },
      onCompleted: (result) => {
        if (result.createDistrict.__typename === 'District') {
          onClose();
        } else if (result.createDistrict.__typename === 'ApiCreateError') {
          if (result.createDistrict.field) {
            setError(
              result.createDistrict.field as keyof CreateDistrictInput,

              {
                type: 'server',
                message: result.createDistrict.message,
              }
            );
          } else if (
            !result.createDistrict.errors &&
            !result.createDistrict.field
          ) {
            setError('unknown' as keyof CreateDistrictInput, {
              type: 'server',
              message: result.createDistrict.message,
            });
          } else {
            result.createDistrict.errors?.forEach((err) =>
              setError(err.field as keyof CreateDistrictInput, {
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
      PaperComponent={DraggableDistrictForm}
      aria-label="new District form dialog"
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
          New District Form
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          Add new District to the system
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Select
            name="country_id"
            value={countryId}
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
            onChange={handleCountrySelectionChange}
          >
            {countries &&
              countries.map((country) => (
                <MenuItem value={country.id}>{country.name}</MenuItem>
              ))}
          </Select>
          <FormSelect
            control={control}
            name="province_id"
            errors={errors}
            defaultValue={selectedProvinceId}
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
          >
            {provinces &&
              provinces.map((province) => (
                <MenuItem value={province.id}>{province.name}</MenuItem>
              ))}
          </FormSelect>
          <FormInput
            control={control}
            name="name"
            fullWidth
            label="District Name"
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
            label="District Code"
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

export default DistrictForm;
