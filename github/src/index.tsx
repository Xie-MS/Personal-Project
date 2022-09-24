import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import LabelManagement from "./LabelManagement";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />}>
        {/* <Route path="/OAuth" element={<OAuth />} />  */}
            <Route path="/LabelManagement" element={<LabelManagement />} /> 
          </Route>
        </Routes>
      </BrowserRouter> 
  </Provider>
);