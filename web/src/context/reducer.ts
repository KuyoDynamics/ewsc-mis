import { AlertColor } from '@mui/material';
import { ToastNotification } from 'components/toast';
import { v4 as uuidv4 } from 'uuid';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum ActionTypes {
  ShowToast = 'SHOW_TOAST',
  HideToast = 'HIDE_TOAST',
}

type ToastPayload = {
  [ActionTypes.ShowToast]: {
    message: string;
    severity: AlertColor;
    open: boolean;
  };
  [ActionTypes.HideToast]: {
    id: string;
  };
};

export type ToastActions =
  ActionMap<ToastPayload>[keyof ActionMap<ToastPayload>];

export const ToastReducer = (
  state: ToastNotification[],
  action: ToastActions
) => {
  switch (action.type) {
    case ActionTypes.ShowToast:
      return [
        ...state,
        {
          message: action.payload.message,
          severity: action.payload.severity,
          id: uuidv4(),
          open: true,
        },
      ];
    case ActionTypes.HideToast:
      return [
        ...state.filter(
          (notification) => notification.id !== action.payload.id
        ),
      ];
    default:
      return state;
  }
};
