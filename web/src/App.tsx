import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useGetAppDataQuery } from "../graphql/generated";
import { DashboardLayout } from "./components/dashboard/dashboard-layout";
import Dashboard from "./routes/dashboard";
function App() {
  const { loading, data } = useGetAppDataQuery({
    fetchPolicy: "cache-first",
  });
  if (loading) return <p>loading app data...</p>;
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
