import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { fetchProducts } from 'actions/fetchProducts';
import { NormalizeStyle } from 'styles/normalizeStyle';
import { GlobalStyle } from 'styles/globalStyle';
import App from './App';

store.dispatch(fetchProducts());

const persistor = persistStore(store);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NormalizeStyle />
          <GlobalStyle />
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </StrictMode>
);
