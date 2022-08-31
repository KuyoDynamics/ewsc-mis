/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Alert,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  PaperProps,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm, useWatch } from 'react-hook-form';
import DraggablePaper from 'components/draggable-paper';
import FormInput from 'components/form-input-helpers/form-input';
import FormSelect from 'components/form-input-helpers/form-select';
import { INDICATOR_TYPE_OPTIONS } from 'utils';
import useGetDefaultOrganisation from 'utils/hooks/use-get-default-organisation';
import {
  CreateIndicatorInput,
  GetIndicatorsDocument,
  IndicatorType,
  useCreateIndicatorMutation,
  useGetIndicatorUnitsQuery,
  useGetReportTemplatesQuery,
} from '../../../../graphql/generated';

const schema = Yup.object({
  indicator_number: Yup.string().required(),
  description: Yup.string().required(),
  indicator_unit_id: Yup.string().uuid().required(),
  contributing_organisation: Yup.string().required(),
  type: Yup.mixed<IndicatorType>()
    .oneOf(INDICATOR_TYPE_OPTIONS as IndicatorType[])
    .required(),
});

function DraggableIndicatorForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#new-country-dialog-title" />;
}
interface IIndicatorFormProps {
  open: boolean;
  onClose: () => void;
}

function IndicatorForm({ open, onClose }: IIndicatorFormProps) {
  const [createIndicator, { loading: creating, error: exception }] =
    useCreateIndicatorMutation({
      refetchQueries: [GetIndicatorsDocument],
    });

  const { data: indicatorUnitsData } = useGetIndicatorUnitsQuery();

  const defaultOrganisation = useGetDefaultOrganisation();

  const indicatorUnits = indicatorUnitsData?.indicator_units ?? null;

  const { data: reportTemplatesData } = useGetReportTemplatesQuery();

  const reportTemplates = reportTemplatesData?.report_templates ?? null;

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors, isDirty },
    setError,
    register,
    setValue,
  } = useForm<CreateIndicatorInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const indicatorType = useWatch({
    control,
    name: 'type',
  });

  const onSubmit = async ({
    indicator_number,
    description,
    category,
    type,
    indicator_unit_id,
    report_template_id,
    contributing_organisation,
  }: CreateIndicatorInput) => {
    console.log(
      'indicator_number,description,category,type,indicator_unit_id,report_template_id,contributing_organisation',
      indicator_number,
      description,
      category,
      type,
      indicator_unit_id,
      report_template_id,
      contributing_organisation
    );
    createIndicator({
      variables: {
        input: {
          indicator_number,
          description,
          category,
          type,
          indicator_unit_id,
          report_template_id,
          contributing_organisation,
        },
      },
      onCompleted: (result) => {
        if (result.createIndicator.__typename === 'Indicator') {
          onClose();
        } else if (result.createIndicator.__typename === 'ApiCreateError') {
          if (result.createIndicator.field) {
            setError(
              result.createIndicator.field as keyof CreateIndicatorInput,

              {
                type: 'server',
                message: result.createIndicator.message,
              }
            );
          } else if (
            !result.createIndicator.errors &&
            !result.createIndicator.field
          ) {
            setError('unknown' as keyof CreateIndicatorInput, {
              type: 'server',
              message: result.createIndicator.message,
            });
          } else {
            result.createIndicator.errors?.forEach((err) =>
              setError(err.field as keyof CreateIndicatorInput, {
                type: 'server',
                message: err.message,
              })
            );
          }
        }
      },
      // onError: (err) => {
      //   // throw it and let it be handled by the Error Boundary
      //   console.log('Chaiwa, something bad happened', err);
      // },
    });
  };

  useEffect(() => {
    if (indicatorType === IndicatorType.Custom) {
      setValue('contributing_organisation', defaultOrganisation.name);
    } else {
      setValue('contributing_organisation', 'nis');
    }
  }, [indicatorType, setValue, defaultOrganisation.name]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperComponent={DraggableIndicatorForm}
      aria-label="new Indicator form dialog"
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '500px',
          },
        },
      }}
    >
      {(exception || errors['unknown' as keyof CreateIndicatorInput]) && (
        <Box>
          <Alert severity="error">
            {errors['unknown' as keyof CreateIndicatorInput]?.message ||
              exception?.message}
            . Please contact support or try again!
          </Alert>
        </Box>
      )}
      <DialogTitle id="user-inivation-dialog-title">
        <Typography color="textPrimary" variant="h4">
          New Indicator Form
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          Add new Indicator to the system
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <FormInput
            control={control}
            name="indicator_number"
            fullWidth
            label="Indicator Number"
            margin="normal"
            variant="outlined"
            inputProps={{
              autoCapitalize: 'on',
              autoComplete: 'off',
            }}
          />

          <FormInput
            control={control}
            name="description"
            fullWidth
            label="Indicator Description"
            margin="normal"
            variant="outlined"
            inputProps={{
              autoComplete: 'off',
            }}
          />

          <FormInput
            control={control}
            name="category"
            fullWidth
            label="Category Description(Optional)"
            margin="normal"
            variant="outlined"
            inputProps={{
              autoComplete: 'off',
            }}
            sx={{
              mb: '15px',
            }}
          />

          <FormSelect
            control={control}
            name="indicator_unit_id"
            errors={errors}
            fullWidth
            label="Unit"
            size="small"
            margin="none"
            variant="outlined"
            sx={{
              mt: '15px',
              mb: '15px',
            }}
          >
            {indicatorUnits &&
              indicatorUnits.map((unit) => (
                <MenuItem key={unit.id} value={unit.id}>
                  {unit.display_name}
                </MenuItem>
              ))}
          </FormSelect>

          <FormSelect
            control={control}
            name="type"
            errors={errors}
            fullWidth
            defaultValue={IndicatorType.Nis}
            label="Type"
            size="small"
            margin="none"
            variant="outlined"
            sx={{
              mt: '15px',
              mb: '15px',
            }}
          >
            {INDICATOR_TYPE_OPTIONS &&
              INDICATOR_TYPE_OPTIONS.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
          </FormSelect>

          <FormSelect
            control={control}
            name="report_template_id"
            errors={errors}
            fullWidth
            size="small"
            label="Report Template(Optional)"
            margin="none"
            variant="outlined"
            sx={{
              mt: '15px',
              mb: '15px',
            }}
          >
            {reportTemplates &&
              reportTemplates.map((template) => (
                <MenuItem key={template.id} value={template.id}>
                  {template.name}
                </MenuItem>
              ))}
          </FormSelect>

          <Box sx={{ py: 2 }}>
            <LoadingButton
              color="primary"
              disabled={isSubmitting || !isValid || creating}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting || creating}
              // loadingPosition="end"
            >
              {isSubmitting || creating ? 'Saving...' : 'Create'}
            </LoadingButton>
          </Box>
          <input
            id="contributing_organisation"
            type="hidden"
            required
            {...register('contributing_organisation')}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default IndicatorForm;
