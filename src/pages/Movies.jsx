import { useState, useEffect } from 'react';
import { searchMoviesRequest } from 'fetchRequest';
import {
  Form,
  FormWrap,
  LinkStyled,
  SearchFormInput,
  SearchFormButton,
  SearchFormIcon,
  HomeList,
} from 'components/styled-components';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(
    JSON.parse(window.localStorage.getItem('searchMovies')) ?? []
  );
  const [inputValue, setInputValue] = useState(
    JSON.parse(window.localStorage.getItem('searchQuery')) ?? ''
  );
  const [isShownError, setIsShownError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    window.localStorage.setItem('searchQuery', JSON.stringify(inputValue));
  }, [inputValue]);

  useEffect(() => {
    window.localStorage.setItem('searchMovies', JSON.stringify(searchMovies));
  }, [searchMovies]);

  useEffect(() => {
    if (!query) return;
    setIsShownError(false);
    searchMoviesRequest(query)
      .then(response => {
        setSearchMovies(response.results);
        if (response.results.length === 0) {
          setIsShownError(true);
        }
      })
      .catch(err => console.log(err));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.search.value;
    if (searchValue.trim() === '') return;
    setSearchParams({ query: searchValue });
    setInputValue('');
  };

  return (
    <>
      <FormWrap>
        <Form onSubmit={handleSubmit}>
          <SearchFormInput
            autoComplete="off"
            type="text"
            name="search"
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value);
            }}
          />
          <SearchFormButton type="submit">
            <SearchFormIcon />
          </SearchFormButton>
        </Form>
      </FormWrap>
      {isShownError && <h2>There are no movies for your request :(</h2>}
      {searchMovies.length !== 0 && (
        <HomeList>
          {searchMovies.map(movie => (
            <li key={movie.id}>
              <LinkStyled to={`${movie.id}`} state={location}>
                {movie.title}
              </LinkStyled>
            </li>
          ))}
        </HomeList>
      )}
    </>
  );
};

export default Movies;
