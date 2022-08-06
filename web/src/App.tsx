import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationScroll from 'layout/navigation-scroll';
import AppRouter from 'routes/router';
import AppRoutes from 'routes';
// import AppLayout from 'components/app/app-layout';

function App() {
  return (
    <div className="App">
      <NavigationScroll>
        <AppRoutes />
      </NavigationScroll>
    </div>
  );
}

export default App;
