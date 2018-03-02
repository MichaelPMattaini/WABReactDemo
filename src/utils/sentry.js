import Raven from 'raven-js';

// init Raven
if (process.env.NODE_ENV === 'production') {
  Raven.config(process.env.SENTRY_DSN).install();

  // attempt to catch and report uncaught errors
  window.onerror = (msg, url, lineNo, columnNo, error) => {
    Raven.captureException(error);
    return false;
  };
}

export default Raven;
