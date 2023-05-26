import { useState, useEffect } from 'react';
import { searchMoviesRequest } from 'fetchRequest';
import { LinkStyled } from 'components/styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    searchMoviesRequest(query)
      .then(response => {
        setSearchMovies(response.results);
      })
      .catch(err => console.log(err));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value;
    if (searchValue.trim() === '') return;
    setSearchParams({ query: searchValue });
    e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {searchMovies.length !== 0 &&
          searchMovies.map(movie => {
            return (
              <li key={movie.id}>
                <LinkStyled to={`${movie.id}`} state={location}>
                  {movie.title}
                </LinkStyled>
              </li>
            );
          })}
      </ul>
    </>
  );
};
