import React from 'react';
import { StyledEngineProvider } from '@mui/system';
import NavigationScroll from 'layout/navigation-scroll';
import AppRouter from 'routes';
import { AppProvider } from 'context/app-context';
import Toast from 'components/toast';

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <AppProvider>
          <>
            <NavigationScroll>
              <AppRouter />
            </NavigationScroll>
            <Toast />
          </>
        </AppProvider>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
