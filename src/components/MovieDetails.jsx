import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useNavigate} from "react-router-dom";
import { movieDetails } from "../api";
import PropTypes from 'prop-types';
import styles from "./MovieDetails.module.scss"

const MovieDetails = () =>{
    const{movieId} = useParams();
    const[movie, setMovie] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async() =>{
            try{
            const data = await movieDetails(movieId);
            setMovie(data);
            }catch (error) {
                console.error('Error fetching movie details:', error);
              }
        };
        fetchData();
    },[movieId]);
    
    if (!movie) return <div>Loading...</div>;

    return(
        <div>
             <button onClick={() => navigate('/movies')}>Back to Movies</button>
            <div className={styles.movieDetails}>
                <div>
                    <img className={styles.poster} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                </div>
                <div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                    <p><strong>User Score:</strong> {movie.vote_average}</p>
                </div>
            </div>

            <p className={styles.addInfo}>ADDITIONAL INFORMATION</p>
            <nav className={styles.filmInfo}>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </nav>
            <Outlet/>
        </div>

    );
};

MovieDetails.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string,
      overview: PropTypes.string,
      poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })),
    vote_average: PropTypes.number
    }),
    movieId: PropTypes.string
  };

export default MovieDetails;