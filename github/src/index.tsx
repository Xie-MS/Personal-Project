import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
    // <Provider>
  <BrowserRouter>
     <Routes>
     <Route path="/" element={<App />}>
         {/* <Route index element={<Home />} /> */}
        {/* <Route path="/Label Management" element={<App />} /> 
        <Route path="/IssueList" element={<App />} /> 
        <Route path="/Issue" element={<App />} /> 
        // <Route path="/NewIssue" element={<App />} />  */}
       </Route>
    </Routes>
  </BrowserRouter> 
//   </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
