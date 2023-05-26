import { castRequest } from 'fetchRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();
  console.log(cast);

  useEffect(() => {
    castRequest(movieId)
      .then(response => {
        setCast(response);
      })
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    cast && (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w92/${cast.cast[0].profile_path}`}
          alt={cast.cast.name}
        />
        <p>{cast.cast[0].name}</p>
        <p>{cast.cast[0].character}</p>
      </div>
    )
  );
};
