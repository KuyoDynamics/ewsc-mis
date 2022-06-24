import React from "react";
import { Link, Outlet } from "react-router-dom";
import { DashboardLayout } from "./components/dashboard/dashboard-layout";
import Dashboard from "./routes/dashboard";
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
