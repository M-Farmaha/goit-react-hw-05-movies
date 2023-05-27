import { castRequest } from 'fetchRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoCastFaceImageW92 from '../images/no-cast-face-w92.jpg';
import {
  AddSection,
  CastList,
  CastItem,
  CastImageWrap,
} from './styled-components';

const Cast = () => {
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
    <AddSection>
      <CastList>
        {cast.map(el => (
          <CastItem key={el.id}>
            <CastImageWrap>
              <img
                src={
                  el.profile_path
                    ? `https://image.tmdb.org/t/p/w92/${el.profile_path}`
                    : NoCastFaceImageW92
                }
                alt={el.name}
              />
            </CastImageWrap>
            <p>{el.name}</p>
            <p>{el.character}</p>
          </CastItem>
        ))}
      </CastList>
    </AddSection>
  ) : (
    <h3>Sorry! We don't have cast info about this movie :(</h3>
  );
};

export default Cast;
