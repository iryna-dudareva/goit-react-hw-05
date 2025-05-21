import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/tmdbapi';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query === '') return;

    searchMovies(query)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error('Search error:', err));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputValue = form.elements.query.value;

    if (inputValue === '') return;

    setSearchParams({ query: inputValue });
    form.reset();
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          placeholder="Search movies..."
          className={css.input}
        />
        <button type="submit" className={css.button}>Search</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default MoviesPage;
