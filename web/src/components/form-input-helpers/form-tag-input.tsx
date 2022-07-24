/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { Chip, TextField, TextFieldProps, Tooltip } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import {
  Control,
  Controller,
  FieldError,
  UseFormRegister,
} from 'react-hook-form';
import { UserInvitationFormInputs } from 'components/users/user-invitation-form';

type FormInputTagsProps = {
  name: string;
  control: Control<any, any>;
  isValidTag: (tag: string) => boolean;
  register: UseFormRegister<UserInvitationFormInputs>;
} & TextFieldProps;

function FormTagInput({
  name,
  control,
  isValidTag,
  ...otherProps
}: FormInputTagsProps) {
  const [value, setValue] = React.useState<string[]>([]);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    tags?: string | string[] | null
  ) => {
    if (tags && Array.isArray(tags)) {
      setValue(tags);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<{}>,
    newInputValue: string
  ) => {
    const options = newInputValue.split(/[ ,]+/);
    const fieldValue = value
      .concat(options)
      .map((x) => x.trim())
      .filter((x) => x);

    if (options.length > 1) {
      handleChange(event, fieldValue);
    } else {
      setInputValue(newInputValue);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({
        field: { onChange },
        fieldState: { error },
        formState: { errors },
      }) => {
        const fieldInputError = errors[name]
          ? (errors[name] as unknown as Array<FieldError>)[0]
          : null;

        return (
          <Autocomplete
            multiple
            disableClearable
            options={[]}
            freeSolo
            renderTags={(values, getTagProps) =>
              values.flat().map((tag, index) => (
                <Tooltip
                  title={
                    error && Array.isArray(error) ? error[index]?.message : ''
                  }
                >
                  <Chip
                    deleteIcon={<CloseIcon />}
                    label={tag}
                    color={isValidTag(tag) ? 'primary' : 'error'}
                    {...getTagProps({ index })}
                  />
                </Tooltip>
              ))
            }
            inputValue={inputValue}
            onChange={(_, data) => onChange(data)}
            onInputChange={handleInputChange}
            renderInput={(params) => (
              <TextField
                {...params}
                {...otherProps}
                name={name}
                error={!!fieldInputError}
                helperText={fieldInputError && fieldInputError.message}
                variant="outlined"
                InputProps={{ ...params.InputProps }}
              />
            )}
          />
        );
      }}
    />
  );
}

export default FormTagInput;
