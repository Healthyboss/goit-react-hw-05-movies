import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { movieDetails } from "../api";

const MovieDetails = () =>{
    const{movieId} = useParams();
    const[movie, setMovie] = useState(null);

    useEffect(()=>{
        const fetchData = async() =>{
            const movieData = await movieDetails(movieId);
            setMovie(movieData);
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



export default MovieDetails;