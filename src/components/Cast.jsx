import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { getMovieCredits  } from "../api";
import PropTypes from 'prop-types';

const Cast = () => {
    const{movieId} = useParams();
    const[cast, setCast] =useState([]);

    useEffect(() => {
            const fetchData = async()=> {
                try { 
                const castData = await getMovieCredits(movieId);
                setCast(castData);
                } catch (error) {
                console.error('Error fetching movie credits:', error);
                }
        };
        fetchData();
    }, [movieId]);

    return(
        <div>
            <h2>Cast</h2>
            <ul>
            {cast.map(memeber =>(
                <li key={memeber.cast_id}>{memeber.name} as {memeber.character}</li>
            ))}
            </ul>
        </div>
    );

};

Cast.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }))
  };

export default Cast;