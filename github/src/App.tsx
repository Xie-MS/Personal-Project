import React from "react";
import { Outlet } from "react-router-dom";
import { Reset } from "styled-reset";
import { Header } from "./stories/Header";

import Headers from "./header";

function App() {
  return (
    <>
      <Reset />
      <Headers />
      <Outlet />
    </>
  );
}

export default App;
