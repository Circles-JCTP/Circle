import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ContextProvider } from "./components/Socket.js";
import "../styles.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <ContextProvider>
    <React.Fragment>
      <App></App>
    </React.Fragment>
  </ContextProvider>
);
