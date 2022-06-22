import React from "react";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>EWSC MIS!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/countries">Countries</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
