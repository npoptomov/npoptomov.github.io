import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot instead of ReactDOM
import App from './App';
import { GlobalStyles } from './styles/GlobalStyles';

const container = document.getElementById('root'); // Get the root DOM element
const root = createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);