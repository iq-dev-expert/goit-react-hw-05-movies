import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ dataMovies }) => {
  const location = useLocation();

  return (
    <ul>
      {dataMovies.map(movie => {
        const movieTitle = movie.title ?? movie.name;

        return (
          <li key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{
                from: location,
              }}
            >
              {movieTitle}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
