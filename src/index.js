import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContextProvider } from "./Context/maincontextprovider";

ReactDOM.render(
  <React.StrictMode>
    <MainContextProvider>
      <Router>
        <App />
      </Router>
    </MainContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
