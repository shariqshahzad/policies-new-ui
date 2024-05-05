import { useRouteError } from 'react-router-dom';
import { captureException } from '@sentry/react';

/**
 * This is workaround solution. React router doesn't support disabling built-in error boundary
 * and our core ErrorBoundary is not compatible with react-router solution, which makes react-router boundary catches the error
 * and doesn't push it to the Sentry. That's why there is a need to bubble it outside the router.
 * */
const BubbleError = () => {
  const error = useRouteError();
  /**
   * for some reason, after build sentry doesn't capture TypeErrors, so there's a need to capture them manually
   * */
  captureException(error);
  throw error;
};

export default BubbleError;
