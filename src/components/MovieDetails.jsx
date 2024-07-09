import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { movieDetails } from "../api";
import PropTypes from 'prop-types';

const MovieDetails = () =>{
    const{movieId} = useParams();
    const[movie, setMovie] = useState(null);

    useEffect(()=>{
        const fetchData = async() =>{
            try{
            const movieData = await movieDetails(movieId);
            setMovie(movieData);
            }catch (error) {
                console.error('Error fetching movie details:', error);
              }
        };
        fetchData();
    },[movieId]);
    
    if (!movie) return <div>Loading...</div>;

    return(
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <nav>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <Outlet/>
        </div>

    );
};

MovieDetails.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string,
      overview: PropTypes.string
    }),
    movieId: PropTypes.string.isRequired
  };

export default MovieDetails;