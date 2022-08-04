/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDisableUserMutation, User } from '../../../graphql/generated';

interface IConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  user: User;
}

function UserAccountDisableDialog(props: IConfirmationDialogProps) {
  const { onClose, open, user } = props;

  const [toggleAccountStatus, { loading }] = useDisableUserMutation();

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    // this is where you send mutation to disable account
    toggleAccountStatus({
      variables: {
        input: {
          id: user.id,
          update: {
            disabled: !user.disabled,
          },
        },
      },
      onCompleted(_data) {
        onClose();
        // if (data.disableUser.__typename === 'User') {
        // }
      },
      onError(error) {
        onClose();
      },
    });
    onClose();
  };

  return (
    <Dialog
      id="user-account-disable-dialog"
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      open={open}
      keepMounted
      transitionDuration={{
        exit: 1000,
      }}
    >
      <DialogTitle>{`Confirm Account ${
        user.disabled ? 'Enable' : 'Disable'
      }`}</DialogTitle>
      <DialogContent dividers>
        <Typography>
          {`Are you sure you want to ${user.disabled ? 'enable' : 'disable'}`}{' '}
          <span style={{ fontWeight: 'bold' }}>{user.first_name}</span>&apos;s
          account?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} disabled={loading}>
          No
        </Button>
        {/* <Box sx={{ py: 2 }}> */}

        <LoadingButton
          onClick={handleOk}
          color="primary"
          disabled={loading}
          size="small"
          variant="text"
          loading={loading}
          loadingPosition="end"
        >
          {loading
            ? `${user.disabled ? 'enabling user...' : 'disabling user...'}`
            : 'Yes'}
        </LoadingButton>
        {/* </Box> */}
      </DialogActions>
    </Dialog>
  );
}

export default UserAccountDisableDialog;
