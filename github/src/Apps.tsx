import React from "react";
import { Outlet } from "react-router-dom";
import { Reset } from "styled-reset";

function App() {
  return (
    <>
      <Reset />
      <h1>Hello</h1>
      <Outlet />
    </>
  );
}

export default App;
