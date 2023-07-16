import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import imgNotFound from 'images/image-not-found.png';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'utils/js/fetch';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { title, name, vote_average, overview, genres, poster_path } =
    dataMovie;
  const movieTitle = title ?? name;

  useEffect(() => {
    (async () => {
      try {
        const resp = await getMovieDetails(movieId);

        setDataMovie(resp);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  const getPoster = poster_path =>
    poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` : imgNotFound;

  const selectionGenres = () => {
    return genres.map(genre => genre.name).join(' ');
  };

  const calcUserScore = () => {
    const userScore = vote_average * 10;
    return Math.round(userScore);
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      {error ? (
        <>
          <button
            type="button"
            className="mb-5 hover:bg-violet-300 focus:bg-violet-300 hover:border-violet-300 focus:border-violet-300"
          >
            <Link
              to={backLinkLocationRef.current}
              className="no-underline text-inherit"
            >
              Go back
            </Link>
          </button>
          <div>Page not found</div>
        </>
      ) : (
        !isLoading && (
          <>
            <button
              type="button"
              className="mb-5 hover:bg-violet-300 focus:bg-violet-300 hover:border-violet-300 focus:border-violet-300"
            >
              <Link
                to={backLinkLocationRef.current}
                className="no-underline text-inherit"
              >
                Go back
              </Link>
            </button>
            <div className="flex shadow-md">
              <div className="mr-5 w-50 h-76">
                <img src={getPoster(poster_path)} alt={movieTitle} />
              </div>
              <div className="w-3/4">
                <h1>{movieTitle}</h1>
                <p>User Score: {calcUserScore()}%</p>
                <h2>Overview</h2>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{selectionGenres()}</p>
              </div>
            </div>
            <div className="pb-5 shadow-md">
              <p>Additional information</p>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </ul>
            </div>
            <Suspense>
              <Outlet />
            </Suspense>
          </>
        )
      )}
    </>
  );
};

export default MovieDetails;
