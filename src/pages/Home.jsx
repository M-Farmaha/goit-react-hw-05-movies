import { useState, useEffect } from 'react';
import { trendingMoviesRequest } from 'fetchRequest';
import { LinkStyled, HomeList, HomeTitle } from 'components/styled-components';
import { useLocation } from 'react-router-dom';

const Home = () => {
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
    trendingMovies.length !== 0 && (
      <>
        <HomeTitle>Trending today</HomeTitle>
        <HomeList>
          {trendingMovies.map(movie => {
            return (
              <li key={movie.id}>
                <LinkStyled to={`movies/${movie.id}`} state={location}>
                  {movie.title}
                </LinkStyled>
              </li>
            );
          })}
        </HomeList>
      </>
    )
  );
};

export default Home;
