import { useState, useEffect } from 'react';
import { movieDetailRequest } from 'fetchRequest';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { LinkStyled } from 'components/styled-components';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    movieDetailRequest(movieId)
      .then(response => {
        setMovie(response);
      })
      .catch(err => setError(err));
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <LinkStyled to={location.state ?? '/'}>Go back</LinkStyled>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width={300}
            />
            <h2>{movie.title}</h2>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(el => el.name).join(', ')}</p>
          </div>
          <div>
            <h4>Additional information</h4>
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
      {error && <h1>Movie doesn't exist</h1>}
    </>
  );
};
