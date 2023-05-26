import { useState } from 'react';
import { searchMoviesRequest } from 'fetchRequest';
import { LinkStyled } from 'components/styled-components';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery === '') return;
    searchMoviesRequest(searchQuery)
      .then(response => {
        setSearchMovies(response.results);
      })
      .catch(err => alert(err));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {searchMovies.length !== 0 &&
          searchMovies.map(movie => {
            return (
              <li key={movie.id}>
                <LinkStyled to={`${movie.id}`}>{movie.title}</LinkStyled>
              </li>
            );
          })}
      </ul>
    </>
  );
};
