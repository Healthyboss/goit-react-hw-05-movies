import { useState, useEffect } from "react";
import { trendingMovies } from "../api";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Home = () => {
    const[movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            const getTrendingMovies = await trendingMovies();
            setMovies(getTrendingMovies);
        }
        fetchData();
    },[])

    return(
        <div>
        <h1>Trending today</h1>
        <ul>
            {movies.map(movie=>(
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
        </div>
    );
};

Home.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
      itle: PropTypes.string.isRequired,
    }))
  };

export default Home;