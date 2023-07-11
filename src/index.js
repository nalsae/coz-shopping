import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { NormalizeStyle } from 'styles/normalizeStyle';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <NormalizeStyle />
      <App />
    </Router>
  </StrictMode>
);
