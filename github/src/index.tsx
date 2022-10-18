import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import OAuth from "./OAuth";
import Error from "./404";
import LabelManagement from "./LabelManagement/LabelManagement";
import IssuePage from "./IssuePage";
import NewIssuePage from "./NewIssuePage";
import IssueDetailPage from "./IssueDetailPage";
import SignIn from "./SignIn";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/LabelManagement" element={<LabelManagement />} />
          <Route path="/Issue" element={<IssuePage />} />
          <Route path="/Issue/:IssueNum" element={<IssueDetailPage />} />
          <Route path="/NewIssue" element={<NewIssuePage />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
