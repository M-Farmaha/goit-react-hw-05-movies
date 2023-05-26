import { searchMovieDetail } from 'fetchRequest';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LinkStyled } from 'components/styled-components';

export const MovieDetails = () => {
  const { movieId } = useParams('');
  const [movieObj, setMovieObj] = useState({});

  useEffect(() => {
    searchMovieDetail(movieId)
      .then(response => {
        setMovieObj(response);
      })
      .catch(err => alert(err));
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieObj;

  console.log(movieObj);
  return (
    <>
      <LinkStyled>Go Back</LinkStyled>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width={300}
        />
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres && genres.map(el => el.name).join(', ')}</p>
      </div>
    </>
  );
};
