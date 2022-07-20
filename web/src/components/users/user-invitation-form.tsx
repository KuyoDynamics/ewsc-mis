import React, { KeyboardEventHandler, useState } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  MenuItem,
  PaperProps,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { OnChangeValue } from 'react-select';
import DraggablePaper from 'components/draggable-paper';
import FormSelect from 'components/form-input-helpers/form-select';
import FormReactCreatableSelect from 'components/form-input-helpers/form-react-select';
import { USER_ORGANISATION_ROLE_OPTIONS } from 'utils';
import {
  DistrictUserRoleType,
  OrganisationUserRoleType,
} from '../../../graphql/generated';

interface IUserInvitationFormProps {
  open: boolean;
  onClose: (event: any) => void;
}

type FormInputs = {
  district: string;
  emailAddresses: string[];
  districtRoles: DistrictUserRoleType[];
};

const schema = Yup.object({
  district: Yup.string()
    .uuid('Invalid district id')
    .required('District is required'),
  //   emailAddresses: Yup.array().of(
  //     Yup.string()
  //       .email('Must be a valid email')
  //       .max(255)
  //       .required('Email is required')
  //   ),
  //   organisationRole: Yup.array(
  //     Yup.mixed()
  //       .oneOf<DistrictUserRoleType>(
  //         Object.values(DistrictUserRoleType) as DistrictUserRoleType[]
  //       )
  //       .required()
  //   )
  //     .min(1)
  //     .ensure(),
  organisationRole: Yup.mixed()
    .oneOf<OrganisationUserRoleType>(
      Object.values(OrganisationUserRoleType) as OrganisationUserRoleType[]
    )
    .required(),
});

function DraggableUserInvitationForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#user-inivation-dialog-title" />;
}

interface Option {
  readonly label: string;
  readonly value: string;
}

function InvitationForm() {
  const [emails, setEmails] = useState<readonly Option[]>([]);
  const [emailInputValue, setEmailInputValue] = useState('');

  const handleEmailValueChange = (
    value: OnChangeValue<Option, true>
    // actionMeta: ActionMeta<Option>
  ) => {
    setEmails(value);
  };

  const handleInputChange = (input: string) => {
    setEmailInputValue(input);
  };

  const createOption = (label: string) => ({
    label,
    value: label,
  });

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (!emailInputValue) return;

    switch (event.key) {
      case 'Enter':
      case ',':
      case 'Tab':
        setEmailInputValue('');
        setEmails((currentEmails) => [
          ...currentEmails,
          createOption(emailInputValue),
        ]);
        event.preventDefault();
        break;
      default:
        break;
    }
  };
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
    // setError,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = async (values: any) => {
    console.log('values', values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormReactCreatableSelect
        control={control}
        name="emailAddresses"
        components={{ DropdownIndicator: null }}
        inputValue={emailInputValue}
        isClearable
        isMulti
        menuIsOpen={false}
        onChange={handleEmailValueChange}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        // placeholder="Type something and press enter..."
        value={emails}
      />

      <FormSelect
        control={control}
        name="organisationRole"
        id="organisationRole"
        fullWidth
        label="Organisation Role"
        variant="outlined"
      >
        {USER_ORGANISATION_ROLE_OPTIONS.filter(
          (op) => !['SUPPORT', 'OWNER'].includes(op)
        ).map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </FormSelect>

      <Box sx={{ py: 2 }}>
        <Button
          color="primary"
          disabled={isSubmitting || !isValid}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
        >
          {isSubmitting ? 'sending invitation...' : 'Send Invite'}
        </Button>
      </Box>
    </form>
  );
}

function UserInvitationForm({ open, onClose }: IUserInvitationFormProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperComponent={DraggableUserInvitationForm}
      aria-label="user invitation form dialog"
      sx={{
        '& .MuiDialog-container': {
          '& .MuiPaper-root': {
            width: '100%',
            maxWidth: '500px', // Set your width here
          },
        },
      }}
    >
      <DialogTitle id="user-inivation-dialog-title">
        <Typography color="textPrimary" variant="h4">
          New User Invitation Form
        </Typography>
        <Typography color="textSecondary" gutterBottom variant="body2">
          An invitation email will be sent to each of the listed emails
        </Typography>
      </DialogTitle>
      <DialogContent>
        <InvitationForm />
      </DialogContent>
    </Dialog>
  );
}

export default UserInvitationForm;
