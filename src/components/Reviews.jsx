import { reviewsRequest } from 'fetchRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AddSection, Review } from './styled-components';

const Reviews = () => {
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
    <AddSection>
      <ul>
        {reviews.map(el => (
          <Review key={el.id}>
            <h4>Author: {el.author}</h4>
            <p>{el.content}</p>
          </Review>
        ))}
      </ul>
    </AddSection>
  ) : (
    <h3>Sorry! We don't have any reviews for this movie :(</h3>
  );
};

export default Reviews;
