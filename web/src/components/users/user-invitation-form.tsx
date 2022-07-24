import React, { useState } from 'react';
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
import DraggablePaper from 'components/draggable-paper';
import FormSelect from 'components/form-input-helpers/form-select';
import { USER_ORGANISATION_ROLE_OPTIONS } from 'utils';
import FormTagInput from 'components/form-input-helpers/form-tag-input';
import {
  CreateUserInvitationInput,
  useCreateUserInvitationMutation,
} from '../../../graphql/generated';

interface IUserInvitationFormProps {
  open: boolean;
  onClose: (event: any) => void;
}

export type UserInvitationFormInputs = {
  include_districts: boolean;
} & CreateUserInvitationInput;

const schema = Yup.object({
  email_addresses: Yup.array()
    .of(Yup.string().email('Invalid email'))
    .min(1, 'At least 1 email is expected'),
});

function DraggableUserInvitationForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#user-inivation-dialog-title" />;
}

const emailSchema = Yup.object().shape({
  tag: Yup.string().email(),
});

const isValidTag = (tag: string): boolean => {
  try {
    emailSchema.validateSync({ tag });
    return true;
  } catch (error) {
    return false;
  }
};

function InvitationForm() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
    register,
  } = useForm<UserInvitationFormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const [createUserInvite, { loading, data, error: inviteCreateError }] =
    useCreateUserInvitationMutation();

  const onSubmit = async (values: UserInvitationFormInputs) => {
    console.log('values', values);
    createUserInvite({
      variables: {
        input: {
          catchment_districts: values.catchment_districts,
          email_addresses: values.email_addresses,
          organisation_id: values.organisation_id,
          organisation_role: values.organisation_role,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormTagInput
        id="email_addresses"
        name="email_addresses"
        label="Email Addresses"
        control={control}
        variant="outlined"
        margin="normal"
        fullWidth
        multiline
        maxRows={4}
        isValidTag={isValidTag}
        register={register}
      />

      <FormSelect
        control={control}
        name="organisation_role"
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
            maxWidth: '500px',
          },
        },
      }}
    >
      <DialogTitle id="user-inivation-dialog-title">
        <Typography color="textPrimary" variant="h6">
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
