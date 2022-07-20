/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  SelectProps,
  Select,
  FormHelperText,
  InputLabel,
  FormControl,
} from '@mui/material';
import { Control, Controller } from 'react-hook-form';

type FormSelectProps = {
  name: string;
  control: Control<any, any>;
} & SelectProps;

function FormSelect({
  name,
  id,
  label,
  fullWidth,
  control,
  children,
  ...otherProps
}: FormSelectProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { isTouched, error } }) => {
        return (
          <FormControl fullWidth={fullWidth}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
              labelId={id}
              label={label}
              {...field}
              {...otherProps}
              error={Boolean(isTouched && error)}
            >
              {children}
            </Select>
            <FormHelperText>{isTouched && error?.message}</FormHelperText>
          </FormControl>
        );
      }}
    />
  );
}

export default FormSelect;
