import { useState, useEffect } from 'react';
import { trendingMoviesRequest } from 'fetchRequest';
import { LinkStyled } from 'components/styled-components';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    trendingMoviesRequest()
      .then(response => {
        setTrendingMovies(response.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.length !== 0 &&
          trendingMovies.map(movie => {
            return (
              <li key={movie.id}>
                <LinkStyled to={`movies/${movie.id}`} state={location}>
                  {movie.title}
                </LinkStyled>
              </li>
            );
          })}
      </ul>
    </>
  );
};
