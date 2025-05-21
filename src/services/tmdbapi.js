import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjNhNjRlNDk5MWM1YmJkODgwOWIwNDVhYTE3YmRiMCIsIm5iZiI6MTc0Nzc3MTUzNy40MTkwMDAxLCJzdWIiOiI2ODJjZTA5MWNjMWQ2NTc3N2Q4YzExZWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oOK_CA-v1cvIy_Kiktxucnhf26PvZbVMcKYlWibHvCw'; 

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_TOKEN,
  },
});

export const getTrendingMovies = () => axiosInstance.get('/trending/movie/day');
export const searchMovies = query => axiosInstance.get(`/search/movie?query=${query}`);
export const getMovieDetails = movieId => axiosInstance.get(`/movie/${movieId}`);
export const getMovieCredits = movieId => axiosInstance.get(`/movie/${movieId}/credits`);
export const getMovieReviews = movieId => axiosInstance.get(`/movie/${movieId}/reviews`);
