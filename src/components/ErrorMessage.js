import React from 'react';

import { sentry } from '../utils';

const ErrorMessage = () => {
  return (
    <div>
      <p>Sorry — something has gone wrong.</p>
      <p>Our team has been notified, but click here fill out a report.</p>
      <button onClick={() => sentry.lastEventId() && sentry.showReportDialog()}>
        Report Issue
      </button>
    </div>
  );
};

export default ErrorMessage;
