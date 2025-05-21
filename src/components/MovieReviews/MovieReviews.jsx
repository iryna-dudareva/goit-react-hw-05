import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/tmdbapi';
import css from './MovieReviews.module.css';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(res => setReviews(res.data.results))
      .catch(err => console.error('Error loading reviews:', err));
  }, [movieId]);

  if (reviews.length === 0) return <p>No reviews found.</p>;

  return (
    <ul className={css.list}>
      {reviews.map(review => (
        <li key={review.id} className={css.item}>
          <p><strong>{review.author}</strong></p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
