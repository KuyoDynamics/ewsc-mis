import * as React from 'react';
import { DataGrid, useGridApiContext } from '@mui/x-data-grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {
  randomCreatedDate,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';

const discountOptions = ['EU-resident', 'junior'];

function CustomEditComponent(props) {
  const { id, value, field } = props;
  const apiRef = useGridApiContext();

  const handleChange = (event) => {
    const eventValue = event.target.value; // The new value entered by the user
    console.log({ eventValue });
    const newValue =
      typeof eventValue === 'string' ? value.split(',') : eventValue;
    apiRef.current.setEditCellValue({
      id,
      field,
      value: newValue.filter((x) => x !== ''),
    });
  };

  return (
    <Select
      labelId="demo-multiple-name-label"
      id="demo-multiple-name"
      multiple
      value={value}
      onChange={handleChange}
      sx={{ width: '100%' }}
    >
      {discountOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  );
}
const CustomDiscountEditCell = (params) => <CustomEditComponent {...params} />;

function CustomFilterInputSingleSelect(props) {
  const { item, applyValue, type, apiRef, focusElementRef, ...others } = props;

  return (
    <TextField
      id={`contains-input-${item.id}`}
      value={item.value}
      onChange={(event) => applyValue({ ...item, value: event.target.value })}
      type={type || 'text'}
      variant="standard"
      InputLabelProps={{
        shrink: true,
      }}
      inputRef={focusElementRef}
      select
      SelectProps={{
        native: true,
      }}
    >
      {['', ...discountOptions].map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </TextField>
  );
}

const initialRows = [
  {
    id: 1,
    name: 'Damien',
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: true,
    country: 'Spain',
    discount: ['EU-resident'],
  },
  {
    id: 2,
    name: 'Nicolas',
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: 'France',
    discount: ['junior'],
  },
  {
    id: 3,
    name: 'Kate',
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
    isAdmin: false,
    country: 'Brazil',
    discount: ['EU-resident', 'junior'],
  },
];

const columns = [
  { field: 'name', type: 'string' },
  { field: 'age', type: 'number' },
  {
    field: 'discount',
    type: 'singleSelect',
    minWidth: 120,
    flex: 1,
    editable: true,
    valueOptions: discountOptions,
    valueFormatter: ({ value }) => (value ? value.join('/') : ''),
    renderEditCell: CustomDiscountEditCell,
    filterOperators: [
      {
        value: 'contains',
        getApplyFilterFn: (filterItem) => {
          if (filterItem.value == null || filterItem.value === '') {
            return null;
          }
          return ({ value }) => {
            // if one of the cell values corresponds to the filter item
            return value.some((cellValue) => cellValue === filterItem.value);
          };
        },
        InputComponent: CustomFilterInputSingleSelect,
      },
    ],
  },
];

export default function ColumnTypesGrid() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        experimentalFeatures={{ newEditingApi: true }}
        columns={columns}
        rows={initialRows}
      />
    </div>
  );
}
