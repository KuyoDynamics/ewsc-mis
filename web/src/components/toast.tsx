import React, { useContext, useMemo } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor } from '@mui/material/Alert';
import { AppContext } from 'context/app-context';
import { ActionTypes } from 'context/reducer';

export type ToastNotification = {
  message: string;
  severity: AlertColor;
  id: string;
  open: boolean;
};

export default function Toast() {
  const { state, dispatch } = useContext(AppContext);

  const firstNotification = useMemo(
    () => Object.values(state.notifications)[0] || {},
    [state.notifications]
  );

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch({
      type: ActionTypes.HideToast,
      payload: { id: firstNotification.id },
    });
  };

  return (
    <Snackbar
      ContentProps={{
        'aria-label': firstNotification.message,
      }}
      id={`toast-${firstNotification.id}`}
      key={firstNotification.id}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={firstNotification.open}
    >
      <MuiAlert
        onClose={handleClose}
        severity={firstNotification.severity}
        sx={{ width: '100%' }}
      >
        {firstNotification.message}
      </MuiAlert>
    </Snackbar>
  );
}
