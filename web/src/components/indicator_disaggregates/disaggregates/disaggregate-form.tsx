/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  MenuItem,
  PaperProps,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm, useWatch } from 'react-hook-form';
import {
  DataGrid,
  GridColumns,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import { INDICATOR_DISAGGREGATE_TYPE_OPTIONS } from 'utils';
import DraggablePaper from 'components/draggable-paper';
import FormInput from 'components/form-input-helpers/form-input';
import FormSelect from 'components/form-input-helpers/form-select';
import {
  CreateDisaggregateInput,
  CreateDisaggregateWithOptionsInput,
  GetDisaggregatesDocument,
  useCreateDisaggregateMutation,
  useCreateDisaggregateWithOptionsMutation,
  Option,
  useGetOptionsQuery,
  DisaggregateType,
} from '../../../../graphql/generated';

const schema = Yup.object({
  name: Yup.string().required().min(1).max(255),
  option_ids: Yup.array().notRequired().nullable().optional(),
  type: Yup.mixed<DisaggregateType>()
    .oneOf(INDICATOR_DISAGGREGATE_TYPE_OPTIONS as DisaggregateType[])
    .required(),
});

export interface CustomToolbarProps {
  title: string;
}

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ justifyContent: 'space-between' }}>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

function DraggableDisaggregateForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#new-country-dialog-title" />;
}
interface IDisaggregateFormProps {
  open: boolean;
  onClose: () => void;
}

function DisaggregateForm({ open, onClose }: IDisaggregateFormProps) {
  const [createDisaggregateWithOptions, { loading: creating }] =
    useCreateDisaggregateWithOptionsMutation({
      refetchQueries: [GetDisaggregatesDocument],
    });

  const { data: optionsData, loading } = useGetOptionsQuery({
    fetchPolicy: 'network-only',
  });

  const rows = useMemo(() => optionsData?.options ?? [], [optionsData]);

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const [checked, setChecked] = useState<string[]>([]);

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, isDirty, errors },
    setError,
    setValue,
  } = useForm<CreateDisaggregateWithOptionsInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const disaggregateType = useWatch({
    control,
    name: 'type',
  });

  const optionIds = useWatch({
    control,
    name: 'option_ids',
    exact: true,
    defaultValue: [],
  });

  const options = useMemo(
    () => rows.filter((r) => [].concat(optionIds).indexOf(r.id) > -1),
    [rows, optionIds]
  );

  const handleSelectionChanged = (selection: string[]) => {
    const newOptions = rows.filter(
      (r) => selection.indexOf(r.id) > -1
    ) as Option[];
    setSelectedOptions(newOptions);
  };

  const handleRightSelectionChanged = (option: Option) => {
    if (checked.indexOf(option.id) > -1) {
      setChecked(checked.filter((item) => item !== option.id));
    } else {
      setChecked([...new Set([...checked, option.id])]);
    }
  };

  const handleAddToOptions = () => {
    const newOptionIds = [
      ...new Set([...optionIds, ...selectedOptions.map((item) => item.id)]),
    ];
    setValue('option_ids', newOptionIds);
  };

  const handleRemoveFromOptions = () => {
    const newOptionIds = optionIds.filter(
      (item) => checked.indexOf(item) === -1
    );
    setValue('option_ids', newOptionIds);
    setChecked([]);
  };

  const onSubmit = async ({
    name,
    option_ids,
    type,
  }: CreateDisaggregateWithOptionsInput) => {
    createDisaggregateWithOptions({
      variables: {
        input: {
          name,
          option_ids,
          type,
        },
      },
      onCompleted: (result) => {
        if (
          result.createDisaggregateWithOptions.__typename === 'Disaggregate'
        ) {
          onClose();
        } else if (
          result.createDisaggregateWithOptions.__typename === 'ApiCreateError'
        ) {
          if (result.createDisaggregateWithOptions.field) {
            setError(
              result.createDisaggregateWithOptions
                .field as keyof CreateDisaggregateWithOptionsInput,

              {
                type: 'server',
                message: result.createDisaggregateWithOptions.message,
              }
            );
          } else if (
            !result.createDisaggregateWithOptions.errors &&
            !result.createDisaggregateWithOptions.field
          ) {
            setError('unknown' as keyof CreateDisaggregateWithOptionsInput, {
              type: 'server',
              message: result.createDisaggregateWithOptions.message,
            });
          } else {
            result.createDisaggregateWithOptions.errors?.forEach((err) =>
              setError(err.field as keyof CreateDisaggregateWithOptionsInput, {
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

  const columns: GridColumns = [
    {
      field: 'name',
      headerName: 'Option Name',
      type: 'string',
      // width: 180,
      editable: true,
      hideable: false,
      flex: 1,
      resizable: true,
      valueGetter: (params: GridValueGetterParams) => {
        return (params.row as Option)?.option_name;
      },
    },
    {
      field: 'id',
      headerName: 'Option ID',
      type: 'string',
      width: 180,
      editable: false,
      flex: 1,
      resizable: true,
    },
  ];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperComponent={DraggableDisaggregateForm}
      aria-label="new Disaggregate form dialog"
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            // maxWidth: '500px',
          },
        },
      }}
    >
      <DialogTitle id="user-inivation-dialog-title">
        <Typography color="textPrimary" variant="h4">
          New Disaggregate Form
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          Add Indicator Disaggregate to the system
        </Typography>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Grid container flexDirection="column" flexWrap="nowrap">
            <Grid item>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                margin="0 0 2px 0"
              >
                <Box sx={{ maxHeight: '100%', width: '100%' }}>
                  <FormInput
                    control={control}
                    name="name"
                    fullWidth
                    label="Disaggregate Name"
                    margin="normal"
                    variant="outlined"
                    inputProps={{
                      autoCapitalize: 'on',
                      autoComplete: 'off',
                    }}
                  />
                  <FormSelect
                    control={control}
                    name="type"
                    label="Disaggregate Type"
                    errors={errors}
                    fullWidth
                    size="small"
                    margin="dense"
                    variant="outlined"
                  >
                    {INDICATOR_DISAGGREGATE_TYPE_OPTIONS &&
                      INDICATOR_DISAGGREGATE_TYPE_OPTIONS.map((c) => (
                        <MenuItem value={c}>{c}</MenuItem>
                      ))}
                  </FormSelect>
                </Box>
              </Grid>
            </Grid>

            {disaggregateType === DisaggregateType.WithParameters && (
              <Grid item>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                  borderRadius={3}
                  margin={0}
                >
                  <Grid item>
                    <Box sx={{ height: 300 }}>
                      <DataGrid
                        rows={rows}
                        isRowSelectable={(params) => {
                          return options.indexOf(params.row) === -1;
                        }}
                        columns={columns}
                        disableSelectionOnClick
                        checkboxSelection
                        onSelectionModelChange={(params) => {
                          handleSelectionChanged(params as string[]);
                        }}
                        disableColumnFilter
                        disableColumnSelector
                        disableDensitySelector
                        hideFooterPagination
                        disableColumnMenu
                        headerHeight={0}
                        components={{
                          Toolbar: CustomToolbar,
                        }}
                        componentsProps={{
                          toolbar: {
                            quickFilterProps: { debounceMs: 500 },
                          },
                        }}
                        loading={loading}
                        initialState={{
                          sorting: {
                            sortModel: [{ field: 'name', sort: 'asc' }],
                          },
                          columns: {
                            columnVisibilityModel: {
                              id: false,
                            },
                          },
                        }}
                        sx={{
                          color: 'inherit',
                          border: '2px',
                          borderColor: 'inherit',
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Grid container direction="column" alignItems="center">
                      <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleAddToOptions}
                        disabled={selectedOptions.length === 0}
                        aria-label="move selected right"
                      >
                        &gt;
                      </Button>
                      <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleRemoveFromOptions}
                        disabled={checked.length === 0}
                        aria-label="move selected left"
                      >
                        &lt;
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <List
                      sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                        border: 1,
                        borderRadius: 2,
                        color: 'inherit',
                      }}
                      subheader={
                        <ListSubheader
                          component="div"
                          id="disaggregate-options-subheader"
                          sx={{ borderRadius: 2 }}
                        >
                          Disaggregate Options
                        </ListSubheader>
                      }
                    >
                      {options &&
                        options.map((option) => {
                          const labelId = `checkbox-list-label-${option.option_name}`;

                          return (
                            <ListItem key={option.id} disablePadding>
                              <ListItemButton
                                role={undefined}
                                onClick={() =>
                                  handleRightSelectionChanged(option as Option)
                                }
                                dense
                              >
                                <ListItemIcon>
                                  <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(option.id) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  id={labelId}
                                  primary={option.option_name}
                                />
                              </ListItemButton>
                            </ListItem>
                          );
                        })}
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>

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

export default DisaggregateForm;
