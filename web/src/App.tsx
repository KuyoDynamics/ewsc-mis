import React from 'react';
import NavigationScroll from 'layout/navigation-scroll';
import AppRouter from 'routes';
import { AppProvider } from 'context/app-context';
import Toast from 'components/toast';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <>
          <NavigationScroll>
            <AppRouter />
          </NavigationScroll>
          <Toast />
        </>
      </AppProvider>
    </div>
  );
}

export default App;
