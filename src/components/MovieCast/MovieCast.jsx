import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from '../../services/tmdbapi';
import css from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(res => setCast(res.data.cast))
      .catch(err => console.error('Error loading cast:', err));
  }, [movieId]);

  if (cast.length === 0) return <p>No cast information available.</p>;

  return (
    <ul className={css.list}>
      {cast.map(actor => (
        <li key={actor.id} className={css.item}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : 'https://via.placeholder.com/100x150?text=No+Image'
            }
            alt={actor.name}
            className={css.photo}
          />
          <p>{actor.name}</p>
          <p><em>{actor.character}</em></p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
