import React from 'react';
import { Outlet } from 'react-router-dom';
import AppLayout from 'components/app/app-layout';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Outlet />
      </AppLayout>
    </div>
  );
}

export default App;
