/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FormControl } from '@mui/material';
import { Control, Controller } from 'react-hook-form';
import CreatableSelect, { CreatableProps } from 'react-select/creatable';

type FormSelectProps = {
  name: string;
  control: Control<any, any>;
} & CreatableProps<any, any, any>;

function FormReactCreatableSelect({
  name,
  //   id,
  //   label,
  //   fullWidth,
  control,
  //   children,
  ...otherProps
}: FormSelectProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { isTouched, error } }) => {
        return (
          <FormControl fullWidth>
            <CreatableSelect
              {...field}
              {...otherProps}
              //   error={Boolean(isTouched && error)}
            />
          </FormControl>
        );
      }}
    />
  );
}

export default FormReactCreatableSelect;
