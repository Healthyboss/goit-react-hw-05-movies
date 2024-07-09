import axios from "axios";

const API_KEY = '18bf16efc49cbb2207b76b1110520a7d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const trendingMovies = async() =>{
    const response = await axios.get( `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
}

export const searchMovies = async(query) =>{
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    return response.data.results;
}

export const movieDetails = async(id) =>{
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data.results;
}

export const getMovieCredits = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data.cast;
  };
  
  export const getMovieReviews = async (id) => {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data.results;
  };