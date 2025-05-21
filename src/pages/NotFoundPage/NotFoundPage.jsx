import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={css.container}>
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className={css.homeLink}>Go to Home Page</Link>
    </div>
  );
}

export default NotFoundPage;
