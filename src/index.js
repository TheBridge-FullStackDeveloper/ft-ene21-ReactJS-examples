import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { ThemeContextProvider } from "./contexts/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
