import React from 'react';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
createRoot(root).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
