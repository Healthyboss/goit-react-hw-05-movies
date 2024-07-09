import { useState} from "react";
import { searchMovies } from "../api";
import { Link } from "react-router-dom";

const Movies = () =>{
    const[query, setQuery] = useState('');
    const[movies, setMovies] = useState([]);

        const handleSearch = async(event) =>{
            event.preventDefault();
            const results = await searchMovies(query);
            setMovies(results);
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
    
    export default Movies;