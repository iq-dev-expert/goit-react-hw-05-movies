import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import { searchMovies } from 'utils/js/fetch';

const Movies = () => {
  const [dataSearchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams] = useSearchParams({});
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    (async () => {
      setIsLoading(true);

      try {
        const resp = await searchMovies(
          `https://api.themoviedb.org/3/search/movie?api_key=38126fe3d6cea635722ecf700f4bc3bf&query=${query}&include_adult=false&language=en-US&page=1`
        );

        if (resp.length === 0) {
          setError(true);
        } else {
          setError(false);
        }

        setSearchMovies(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Searchbar />
      {error ? (
        <div>{query} film does not exist!</div>
      ) : (
        !isLoading && <MovieList dataMovies={dataSearchMovies} />
      )}
    </>
  );
};

export default Movies;
