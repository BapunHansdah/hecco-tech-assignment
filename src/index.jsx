import React from 'react'
import App from './App'
import store from './store'
import {Provider} from 'react-redux'
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </StrictMode>
);

