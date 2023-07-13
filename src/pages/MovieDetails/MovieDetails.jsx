import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import imgNotFound from 'images/image-not-found.png';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'utils/js/fetch';

const MovieDetails = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { title, name, vote_average, overview, genres, poster_path } =
    dataMovie;
  const movieTitle = title ?? name;

  useEffect(() => {
    (async () => {
      try {
        const resp = await getMovieDetails(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=38126fe3d6cea635722ecf700f4bc3bf`
        );

        setDataMovie(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

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
      {!isLoading && (
        <>
          <Link to={backLinkLocationRef.current}>Go back</Link>
          <div>
            <div>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  alt={movieTitle}
                />
              ) : (
                <img src={imgNotFound} alt={name} width={200} height={300} />
              )}
            </div>

            {/* <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
              ) : (
                <img src={imgNotFound} alt={name} width={200} height={300} />
              )} */}

            <h1>{movieTitle}</h1>
            <p>User Score: {calcUserScore()}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{selectionGenres()}</p>
          </div>
          <div>
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
      )}
    </>
  );
};

export default MovieDetails;
