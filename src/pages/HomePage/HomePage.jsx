import { useEffect, useState } from 'react'
import { getTrendingMovies } from '../../services/tmdbapi'
import MovieList from '../../components/MovieList/MovieList'
import css from './HomePage.module.css'

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={css.container}>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage
