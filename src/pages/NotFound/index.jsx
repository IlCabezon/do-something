// routing
import { Link, useRouteError } from 'react-router-dom';

export default function index() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Go to home</Link>
    </div>
  );
}
