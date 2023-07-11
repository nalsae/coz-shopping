import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'styles/globalStyle';
import { NormalizeStyle } from 'styles/normalizeStyle';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <NormalizeStyle />
      <App />
    </Router>
  </StrictMode>
);
