import { Link, useLocation } from 'react-router-dom'
import css from './MovieList.module.css'

function MovieList({ movies }) {
  const location = useLocation();

    if (!Array.isArray(movies)) {
      return <p>No movies to show.</p>;
    }

  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList
