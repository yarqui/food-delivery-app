import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { ErrorBoundary } from 'react-error-boundary';
import App from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="food-delivery-app">
          <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
