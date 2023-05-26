import { castRequest } from 'fetchRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoCastFaceImageW92 from '../images/no-cast-face-w92.jpg';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    castRequest(movieId)
      .then(response => {
        setCast(response.cast);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return cast.length !== 0 ? (
    <ul>
      {cast.map(el => (
        <li key={el.id}>
          <img
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w92/${el.profile_path}`
                : NoCastFaceImageW92
            }
            alt={el.name}
          />
          <p>{el.name}</p>
          <p>{el.character}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>Sorry! We don't have cast info about this movie :(</p>
  );
};
