import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { getMovieCredits  } from "../api";

const Cast = () => {
    const{movieId} = useParams();
    const[cast, setCast] =useState([]);

    useEffect(() => {
        const fetchData =async()=>{
            const castData = await getMovieCredits(movieId);
            setCast(castData);
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

export default Cast;