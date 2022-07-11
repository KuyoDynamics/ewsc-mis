import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from 'routes/dashboard';
import DashboardLayout from 'components/dashboard/dashboard-layout';

function App() {
  return (
    <div className="App">
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
      <Outlet />
    </div>
  );
}

export default App;
