import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from 'pages/Movies';
import { Layout } from './Layout';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </>
  );
};
