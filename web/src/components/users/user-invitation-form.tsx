/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
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
  TextField,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm } from 'react-hook-form';
import { useReactiveVar } from '@apollo/client';
import DraggablePaper from 'components/draggable-paper';
import FormSelect from 'components/form-input-helpers/form-select';
import { USER_ORGANISATION_ROLE_OPTIONS } from 'utils';
import FormTagInput from 'components/form-input-helpers/form-tag-input';
import { currentUserVar } from 'cache';
import {
  ApiCreateError,
  CreateUserInvitationInput,
  GetUserInvitationsDocument,
  OrganisationUserRoleType,
  useCreateUserInvitationMutation,
} from '../../../graphql/generated';
import UserDistrictList2 from './user-district-list2';

interface IUserInvitationFormProps {
  open: boolean;
  onClose: () => void;
}

export type UserInvitationFormInputs = {
  include_districts: boolean;
} & CreateUserInvitationInput;

const schema = Yup.object({
  email_addresses: Yup.array()
    .of(Yup.string().email('Invalid email'))
    .min(1, 'At least 1 email is expected'),
  organisation_role: Yup.mixed<OrganisationUserRoleType>()
    .oneOf(USER_ORGANISATION_ROLE_OPTIONS as OrganisationUserRoleType[])
    .required(),
  organisation_id: Yup.string().uuid('invalid organisation id').required(),
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

interface InvitationFormProps {
  onClose: () => void;
}

function InvitationForm({ onClose }: InvitationFormProps) {
  const currentUser = useReactiveVar(currentUserVar);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
    register,
  } = useForm<UserInvitationFormInputs>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const [
    createUserInvite,
    { loading, data: serverResponse, error: inviteCreateError },
  ] = useCreateUserInvitationMutation({
    refetchQueries: [GetUserInvitationsDocument],
  });

  const submitting = isSubmitting || loading;

  const apiCreateError = React.useMemo(
    () =>
      serverResponse?.createUserInvitation.__typename === 'ApiCreateError'
        ? (serverResponse.createUserInvitation as ApiCreateError)
        : null,
    [serverResponse]
  );

  const onSubmit = async (values: UserInvitationFormInputs) => {
    createUserInvite({
      variables: {
        input: {
          catchment_districts: values.catchment_districts,
          email_addresses: values.email_addresses,
          organisation_id: values.organisation_id,
          organisation_role: values.organisation_role,
        },
      },
      onCompleted: (result) => {
        if (result.createUserInvitation.__typename === 'UserInvitation') {
          onClose();
        } else if (
          result.createUserInvitation.__typename === 'ApiCreateError'
        ) {
          // Set Errors
        }
      },
      onError: (err) => {
        // throw it and let it be handled by the Error Boundary
        console.log('Chaiwa, something bad happened', err);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {(apiCreateError?.errors?.some((err) => err.field === 'unknown') ||
        (apiCreateError?.message && !apiCreateError?.errors)) && (
        <Box>
          <Alert severity="error">{`${apiCreateError.message}. Please contact support or try again!`}</Alert>
        </Box>
      )}

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

      <UserDistrictList2 />

      <Box sx={{ py: 2 }}>
        <LoadingButton
          color="primary"
          disabled={submitting || !isValid}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={submitting}
          loadingPosition="end"
        >
          {submitting ? 'Sending invitation...' : 'Send Invite'}
        </LoadingButton>
      </Box>

      <TextField
        id="organisation_id"
        type="hidden"
        style={{ display: 'none' }}
        value={currentUser?.user_default_organisation?.id}
        {...register('organisation_id')}
      />
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
        <InvitationForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}

export default UserInvitationForm;
