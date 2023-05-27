import { useState, useEffect, useRef, Suspense } from 'react';
import { movieDetailRequest } from 'fetchRequest';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  ImageWrap,
  ImagePoster,
  Button,
  MovieWrap,
  AddWrap,
  AddSection,
} from 'components/styled-components';
import NoPoSterW500 from '../images/no-poster-w500.jpg';

const MovieDetails = () => {
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
          <MovieWrap>
            <Button type="button" onClick={handleClick}>
              Go back
            </Button>
            <ImageWrap>
              <ImagePoster
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : NoPoSterW500
                }
                alt={movie.title}
              />
            </ImageWrap>
            <h2>{movie.title}</h2>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <p>{movie.genres.map(el => el.name).join(', ')}</p>
          </MovieWrap>
          <AddSection>
            <h3>Additional information</h3>
            <AddWrap>
              <li>
                <Button type="button" onClick={() => navigate('cast')}>
                  Cast
                </Button>
              </li>
              <li>
                <Button type="button" onClick={() => navigate('reviews')}>
                  Reviews
                </Button>
              </li>
            </AddWrap>
          </AddSection>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
      {error && <h2>Movie doesn't exist</h2>}
    </>
  );
};

export default MovieDetails;
