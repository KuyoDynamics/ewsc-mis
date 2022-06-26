import React from "react";
import { TextFieldProps, TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form";
type FormInputProps = {
  name: string;
  control: Control<any, any>;
} & TextFieldProps;

function FormInput({ name, control, ...otherProps }: FormInputProps) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({ field, fieldState: { isTouched, error } }) => (
          <TextField
            {...field}
            {...otherProps}
            error={Boolean(isTouched && error)}
            helperText={isTouched && error?.message}
          />
        )}
      />
    </>
  );
}

export default FormInput;
