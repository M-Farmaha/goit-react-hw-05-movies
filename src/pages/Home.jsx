import { useState, useEffect } from 'react';
import { trendingMoviesRequest } from 'fetchRequest';
import { LinkStyled } from 'components/styled-components';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    trendingMoviesRequest()
      .then(response => {
        setTrendingMovies(response.results);
      })
      .catch(err => alert(err));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.length !== 0 &&
          trendingMovies.map(movie => {
            return (
              <li key={movie.id}>
                <LinkStyled to={`movies/${movie.id}`}>{movie.title}</LinkStyled>
              </li>
            );
          })}
      </ul>
    </>
  );
};
