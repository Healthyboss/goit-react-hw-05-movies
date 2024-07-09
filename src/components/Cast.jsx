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
                const data = await getMovieCredits(movieId);
                setCast(data.cast);
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
            {cast.map(member =>(
                <li key={member.cast_id}>
                    <img style={'height=150, width=auto'} src={`https://image.tmdb.org/t/p/w200${member.profile_path}`} alt={member.name}/>
                    {member.name} as {member.character}
                </li>
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