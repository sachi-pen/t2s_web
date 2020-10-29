import React from "react";
import ReactDOM from "react-dom";

import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import SnackbarProvider from "react-simple-snackbar";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <SnackbarProvider>
        <Router>
          <App />
        </Router>
      </SnackbarProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
