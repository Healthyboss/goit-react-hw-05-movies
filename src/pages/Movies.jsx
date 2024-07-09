import { useState} from "react";
import { searchMovies } from "../api";
import { useNavigate, Link} from "react-router-dom";
import PropTypes from 'prop-types';

const Movies = () =>{
    const[query, setQuery] = useState('');
    const[movies, setMovies] = useState([]);
    const navigate = useNavigate();

        const handleSearch = async() =>{
            try{
                const data = await searchMovies(query);
                setMovies(data.results);
            } catch (error) {
              console.error('Error searching movies:', error);}
            
        };
    
    return (
        <div>
            <button onClick={()=> navigate('/')}>Go Back</button>
          <h1>Search Movies</h1>
            <input 
              type="text" 
              value={query} 
              onChange={(event) => setQuery(event.target.value)} 
              placeholder="Search for a movie"
            />
            <button onClick={handleSearch}>Search</button>
          
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