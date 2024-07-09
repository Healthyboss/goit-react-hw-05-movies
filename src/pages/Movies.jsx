import { useState} from "react";
import { searchMovies } from "../api";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Movies = () =>{
    const[query, setQuery] = useState('');
    const[movies, setMovies] = useState([]);

        const handleSearch = async(event) =>{
            try{event.preventDefault();
                const results = await searchMovies(query);
                setMovies(results);
            } catch (error) {
              console.error('Error searching movies:', error);}
            
        };
    
    return (
        <div>
          <h1>Search Movies</h1>
          <form onSubmit={handleSearch}>
            <input 
              type="text" 
              value={query} 
              onChange={(event) => setQuery(event.target.value)} 
              placeholder="Search for a movie"
            />
            <button type="submit">Search</button>
          </form>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    Movies.propTypes = {
        movies: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        }))
      };
      
    export default Movies;