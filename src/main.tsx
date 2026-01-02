import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Optimize non-critical initialization
const initApp = () => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Use requestIdleCallback for non-critical initialization if available
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => {
    if (window.requestIdleCallback) {
      window.requestIdleCallback(initApp);
    } else {
      setTimeout(initApp, 0);
    }
  });
} else {
  if (window.requestIdleCallback) {
    window.requestIdleCallback(initApp);
  } else {
    setTimeout(initApp, 0);
  }
}
