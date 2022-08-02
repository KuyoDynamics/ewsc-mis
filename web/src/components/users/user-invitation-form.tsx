/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
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
import { getUserInvitations, USER_ORGANISATION_ROLE_OPTIONS } from 'utils';
import FormTagInput from 'components/form-input-helpers/form-tag-input';
import { currentUserVar } from 'cache';
import UserDistrictDataGrid from 'components/users/user-district-data-grid';
import {
  CreateUserInvitationCatchmentDistrictInput,
  CreateUserInvitationInput,
  GetUserInvitationsDocument,
  OrganisationUserRoleType,
  useCreateUserInvitationMutation,
  useGetUserInvitationsQuery,
} from '../../../graphql/generated';

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
  catchment_districts: Yup.array().notRequired().nullable().optional(),
});

function DraggableUserInvitationForm(props: PaperProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DraggablePaper {...props} handle="#user-inivation-dialog-title" />;
}

const emailSchema = Yup.object().shape({
  tag: Yup.string().email(),
});

const isValidTag = (
  existingInvites: string[],
  existingOrganisationUserEmails: string[]
) => {
  return (tag: string) => {
    try {
      emailSchema.validateSync({ tag });
      const existingInvite = existingInvites.indexOf(tag) > -1;
      const existingOrgUser = existingOrganisationUserEmails.indexOf(tag) > -1;
      const isValid = !existingInvite && !existingOrgUser;
      return {
        valid: isValid,
        message: existingInvite
          ? 'Email already invited'
          : existingOrgUser
          ? 'Email already a user of this organisation'
          : null,
      };
    } catch (error) {
      return { valid: false, message: 'Invalid email' };
    }
  };
};

interface InvitationFormProps {
  onClose: () => void;
}

function InvitationForm({ onClose }: InvitationFormProps) {
  const currentUser = useReactiveVar(currentUserVar);
  const [catchmentDistricts, setCatchmentDistricts] = useState<
    CreateUserInvitationCatchmentDistrictInput[]
  >([]);

  const { data: invitationData } = useGetUserInvitationsQuery({
    fetchPolicy: 'cache-first',
    variables: {
      args: {
        organisation_id: currentUser?.user_default_organisation?.id! || '',
      },
    },
  });

  const userInvitations =
    getUserInvitations(
      invitationData?.user_invitations ?? [],
      currentUser.user_default_organisation?.name ?? ''
    ) ?? [];

  const invitedEmails = [
    ...new Set(userInvitations.map((invite) => invite.email)),
  ];

  const existingOrganisationUserEmails =
    currentUser.user_default_organisation?.users?.map((user) => user.email) ??
    [];

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, errors },
    register,
    setValue,
    setError,
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

  const apiCreateErrors = React.useMemo(
    () =>
      serverResponse?.createUserInvitation.map((response) => {
        if (response.__typename === 'ApiCreateError') {
          return response;
        }
        return;
      }) ?? null,
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
        if (
          !result.createUserInvitation.some(
            (item) => item.__typename === 'ApiCreateError'
          )
        ) {
          onClose();
        } else {
          result.createUserInvitation.forEach((item) => {
            if (item.__typename === 'ApiCreateError') {
              setError(item.field as keyof UserInvitationFormInputs, {
                type: 'serverSide',
                message: item.message,
              });
            }
          });
        }
      },
      onError: (err) => {
        // throw it and let it be handled by the Error Boundary
        console.log('Chaiwa, something bad happened', err);
      },
    });
  };

  const handleSetCatchmentDistricts = React.useCallback(
    (data: CreateUserInvitationCatchmentDistrictInput[]) => {
      setCatchmentDistricts(data);
    },
    [setCatchmentDistricts]
  );

  useEffect(() => {
    setValue('catchment_districts', catchmentDistricts);
  }, [catchmentDistricts, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {apiCreateErrors?.some((err) => err?.field === 'unknown') && (
        <Box>
          <Alert severity="error">
            Failed to complete this invitation. Please contact support or try
            again!
          </Alert>
        </Box>
      )}

      {(errors.catchment_districts || errors.email_addresses) && (
        <Box>
          <Alert severity="error">
            {errors.catchment_districts?.message ||
              errors.email_addresses?.message}
            . Please contact support or try again!`
          </Alert>
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
        focused
        maxRows={4}
        isValidTag={isValidTag(invitedEmails, existingOrganisationUserEmails)}
        register={register}
        errors={errors}
      />

      <FormSelect
        control={control}
        name="organisation_role"
        id="organisationRole"
        fullWidth
        label="Organisation Role"
        variant="outlined"
        errors={errors}
      >
        {USER_ORGANISATION_ROLE_OPTIONS.filter(
          (op) => !['SUPPORT', 'OWNER'].includes(op)
        ).map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </FormSelect>

      <UserDistrictDataGrid
        setCatchmentDistricts={handleSetCatchmentDistricts}
      />

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

      <input
        id="catchment_districts"
        type="hidden"
        {...register('catchment_districts')}
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
