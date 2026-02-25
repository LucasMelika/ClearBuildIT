import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import ReactGA from 'react-ga4';
import App from './App.jsx';
import './styles/index.css';

// Initialize Sentry
if (import.meta.env.VITE_SENTRY_DSN) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.reactRouterV6Instrumentation(
          window.history
        ),
      }),
      new Sentry.Replay(),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    environment: import.meta.env.MODE,
  });
}

// Initialize Google Analytics
if (import.meta.env.VITE_GOOGLE_ANALYTICS_ID) {
  ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_ID);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Sentry.ErrorBoundary fallback={<div>An error occurred while rendering this page.</div>} showDialog>
        <App />
      </Sentry.ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
