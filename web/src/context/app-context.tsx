import React, { createContext, Dispatch, useReducer } from 'react';
import { ToastActions, ToastReducer } from 'context/reducer';
import { ToastNotification } from 'components/toast';

type AppStateType = {
  notifications: ToastNotification[];
};

const initialState: AppStateType = {
  notifications: [],
};

const AppContext = createContext<{
  state: AppStateType;
  dispatch: Dispatch<ToastActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { notifications }: AppStateType,
  action: ToastActions
) => ({
  notifications: ToastReducer(notifications, action),
});

function AppProvider({ children }: { children: JSX.Element }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
