import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { getMovieReviews  } from "../api";
import PropTypes from 'prop-types';

const Rewievs =()=>{
    const{movieId} = useParams();
    const[reviews, setReviews] =useState([]);

    useEffect(()=>{
        const fetchData = async() => {
            try{
            const data = await getMovieReviews(movieId);
            setReviews(data.results);
            } catch (error) {
                console.error('Error fetching movie reviews:', error);
            }
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

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }))
  };

export default Rewievs;