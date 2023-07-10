import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/js/fetch';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const [dataMovie, setDataMovie] = useState([]);
  const { title, name, vote_average, overview, genres } = dataMovie;

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const resp = await getMovieDetails(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=38126fe3d6cea635722ecf700f4bc3bf`
        );

        setDataMovie(resp);
      } catch (error) {
        console.log('Sorry problem with moviId:', movieId);
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  const movieTitle = title ?? name;
  let selectionGenres;
  if (genres) {
    selectionGenres = genres.map(genre => genre.name).join(' ');
  }

  const calcUserScore = () => {
    const userScore = vote_average * 10;
    return Math.round(userScore);
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <h1>{movieTitle}</h1>
      <p>User Score: {calcUserScore()}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{selectionGenres}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
