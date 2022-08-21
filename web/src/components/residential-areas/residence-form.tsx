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
import { COST_CLASSIFICATION_OPTIONS } from 'utils';
import {
  CreateResidenceInput,
  GetResidencesDocument,
  ResidenceClassification,
  useCreateResidenceMutation,
  useGetCountriesQuery,
  useGetDistrictsQuery,
  useGetProvincesQuery,
} from '../../../graphql/generated';

const schema = Yup.object({
  cost_classification: Yup.mixed<ResidenceClassification>()
    .oneOf(COST_CLASSIFICATION_OPTIONS as ResidenceClassification[])
    .required(),
  name: Yup.string().required().min(4).max(255),
  district_id: Yup.string().uuid().required(),
});

function DraggableResidenceForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#new-country-dialog-title" />;
}
interface IResidenceFormProps {
  open: boolean;
  onClose: () => void;
  selectedCountryId: string;
  selectedProvinceId: string;
  selectedDistrictId: string;
}

function ResidenceForm({
  open,
  onClose,
  selectedCountryId,
  selectedProvinceId,
  selectedDistrictId,
}: IResidenceFormProps) {
  const [countryId, setCountryId] = useState(selectedCountryId);
  const [provinceId, setProvinceId] = useState(selectedProvinceId);

  const [createResidence, { loading: creating }] = useCreateResidenceMutation({
    refetchQueries: [GetResidencesDocument],
  });

  const { data: countryData } = useGetCountriesQuery();

  const countries = useMemo(
    () => countryData?.countries?.map((c) => ({ name: c.name, id: c.id })),
    [countryData]
  );

  const { data: provinceData } = useGetProvincesQuery({
    variables: {
      countryId,
    },
  });

  const provinces = useMemo(
    () => provinceData?.provinces?.map((p) => ({ name: p.name, id: p.id })),
    [provinceData]
  );

  const { data: DistrictData } = useGetDistrictsQuery({
    variables: {
      provinceId,
    },
  });

  const districts = useMemo(
    () => DistrictData?.districts?.map((d) => ({ name: d.name, id: d.id })),
    [DistrictData]
  );

  const handleCountrySelectionChange = (event: SelectChangeEvent) => {
    setCountryId(event.target.value);
  };

  const handleProvinceSelectionChange = (event: SelectChangeEvent) => {
    setProvinceId(event.target.value);
  };

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors, isDirty },
    setError,
  } = useForm<CreateResidenceInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async ({
    cost_classification,
    name,
    district_id,
  }: CreateResidenceInput) => {
    createResidence({
      variables: {
        input: {
          cost_classification,
          name,
          district_id,
        },
      },
      onCompleted: (result) => {
        if (result.createResidence.__typename === 'Residence') {
          onClose();
        } else if (result.createResidence.__typename === 'ApiCreateError') {
          if (result.createResidence.field) {
            setError(
              result.createResidence.field as keyof CreateResidenceInput,

              {
                type: 'server',
                message: result.createResidence.message,
              }
            );
          } else if (
            !result.createResidence.errors &&
            !result.createResidence.field
          ) {
            setError('unknown' as keyof CreateResidenceInput, {
              type: 'server',
              message: result.createResidence.message,
            });
          } else {
            result.createResidence.errors?.forEach((err) =>
              setError(err.field as keyof CreateResidenceInput, {
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
      PaperComponent={DraggableResidenceForm}
      aria-label="new Residence form dialog"
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
          New Residential Area Form
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          Add new Residential Area to the system
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
          <Select
            name="province_id"
            value={provinceId}
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
            onChange={handleProvinceSelectionChange}
          >
            {provinces &&
              provinces.map((province) => (
                <MenuItem value={province.id}>{province.name}</MenuItem>
              ))}
          </Select>
          <FormSelect
            control={control}
            name="district_id"
            errors={errors}
            defaultValue={selectedDistrictId}
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
          >
            {districts &&
              districts.map((district) => (
                <MenuItem value={district.id}>{district.name}</MenuItem>
              ))}
          </FormSelect>
          <FormInput
            control={control}
            name="name"
            fullWidth
            label="Residence Name"
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
            label="Residence Code"
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

export default ResidenceForm;
