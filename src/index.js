import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import App from 'App';
import './index.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="food-delivery-app">
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
    <ToastContainer theme="colored" autoClose={2000} position="top-right" />
  </React.StrictMode>
);
