import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../services/tmdbapi';
import css from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const goBackLink = location.state?.from || '/movies';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => setMovie(res.data))
      .catch(err => console.error('Error fetching movie details:', err));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  const { poster_path, title, overview, genres, vote_average } = movie;

  return (
    <div className={css.container}>
      <button onClick={() => navigate(goBackLink)} className={css.backButton}>
        ← Go back
      </button>

      <div className={css.details}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : 'https://via.placeholder.com/300x450?text=No+Image'
          }
          alt={title}
          className={css.poster}
        />

        <div className={css.info}>
          <h2>{title}</h2>
          <p><strong>User Score:</strong> {Math.round(vote_average * 10)}%</p>
          <p><strong>Overview:</strong> {overview}</p>
          <p><strong>Genres:</strong> {genres.map(g => g.name).join(', ')}</p>
        </div>
      </div>

      <hr />

      <div className={css.links}>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: goBackLink }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: goBackLink }}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export default MovieDetailsPage;
