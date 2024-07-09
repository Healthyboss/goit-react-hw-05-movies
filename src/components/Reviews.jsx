import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { getMovieReviews  } from "../api";

const Rewievs =()=>{
    const{movieId} = useParams();
    const[reviews, setReviews] =useState([]);

    useEffect(()=>{
        const fetchData = async() => {
            const reviewsData = await getMovieReviews(movieId);
            setReviews(reviewsData);
        };
        fetchData();
    }, [movieId]);

    return(
        <div>
            <h2>Reviews</h2>
            <ul>
            {reviews.map(review=>(
                <li key={review.id}>
                    <h3>{review.author}</h3>
                    <p>{review.content}</p>
                </li>
            ))}
            </ul>
        </div>
    );
};

export default Rewievs;