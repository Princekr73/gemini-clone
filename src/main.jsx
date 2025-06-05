import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from "./context/Context";


createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import ContextProvider from "./context/Context";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <ContextProvider>
//     <App />
//   </ContextProvider>
// );



