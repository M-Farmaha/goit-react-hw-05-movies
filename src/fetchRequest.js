const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'ef24936cd708c9aa0029dc0cfa81df25';

export const trendingMoviesRequest = async () => {
  const url = `${BASE_URL}trending/movie/day?api_key=${KEY}`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    throw new Error(errorData);
  }
};

export const searchMoviesRequest = async query => {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}&page=1`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    throw new Error(errorData);
  }
};

export const movieDetailRequest = async movieId => {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    throw new Error(errorData);
  }
};

export const castRequest = async movieId => {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    throw new Error(errorData);
  }
};

export const reviewsRequest = async movieId => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    const errorData = await response.json();
    throw new Error(errorData);
  }
};
