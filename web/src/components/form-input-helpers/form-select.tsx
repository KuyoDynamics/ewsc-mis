/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  SelectProps,
  Select,
  FormHelperText,
  InputLabel,
  FormControl,
} from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';

type FormSelectProps = {
  name: string;
  control: Control<any, any>;
  errors: FieldErrors;
} & SelectProps;

function FormSelect({
  name,
  id,
  label,
  fullWidth,
  control,
  children,
  errors,
  defaultValue,
  ...otherProps
}: FormSelectProps) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { isTouched, error } }) => {
        return (
          <FormControl fullWidth={fullWidth}>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
              labelId={id}
              label={label}
              error={Boolean(isTouched && error)}
              {...field}
              {...otherProps}
            >
              {children}
            </Select>
            {isTouched && (error || errors) && (
              <FormHelperText>
                {error?.message ?? errors[name]?.message?.toString()}
              </FormHelperText>
            )}
          </FormControl>
        );
      }}
    />
  );
}

export default FormSelect;
