import { useState, useEffect, useRef } from 'react';
import { movieDetailRequest } from 'fetchRequest';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { LinkStyled } from 'components/styled-components';
import NoPoSterW500 from '../images/no-poster-w500.jpg';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state ?? '/');
  const navigate = useNavigate();

  useEffect(() => {
    movieDetailRequest(movieId)
      .then(response => {
        setMovie(response);
      })
      .catch(err => setError(err));
  }, [movieId]);

  const handleClick = () => {
    navigate(backLinkLocationRef.current);
  };

  return (
    <>
      {movie && (
        <div>
          <button type="button" onClick={handleClick}>
            Go back
          </button>
          <div>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : NoPoSterW500
              }
              alt={movie.title}
              width={300}
            />
            <h2>{movie.title}</h2>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(el => el.name).join(', ')}</p>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <LinkStyled to={'cast'}>Cast</LinkStyled>
              </li>
              <li>
                <LinkStyled to={'reviews'}>Reviews</LinkStyled>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}
      {error && <h2>Movie doesn't exist</h2>}
    </>
  );
};
