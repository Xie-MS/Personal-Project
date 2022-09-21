import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Reset } from "styled-reset";
import { Header } from "./stories/Header";
import { createGlobalStyle } from "styled-components";


import Headers from "./header";
import ContainerTitle from "./ContainerTitle"
import Footer from "./footer";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  }
`;

function App() {
  const state = useSelector((state) => state);
  console.log(state)
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Headers />
      
      <ContainerTitle />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
