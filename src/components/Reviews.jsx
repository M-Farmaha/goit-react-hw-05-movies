import { reviewsRequest } from 'fetchRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    reviewsRequest(movieId)
      .then(response => {
        setReviews(response.results);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ul>
      {reviews.map(el => (
        <li key={el.id}>
          <h4>Author: {el.author}</h4>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>Sorry! We don't have any reviews for this movie :(</p>
  );
};
