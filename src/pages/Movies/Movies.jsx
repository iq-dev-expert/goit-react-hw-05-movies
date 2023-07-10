import { useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import Searchbar from 'components/Searchbar/Searchbar';
import { searchMovies } from 'utils/js/fetch';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [dataSearchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const serchMovies = movieTitle => {
    (async () => {
      setIsLoading(true);

      try {
        const resp = await searchMovies(
          `https://api.themoviedb.org/3/search/movie?api_key=38126fe3d6cea635722ecf700f4bc3bf&query=${movieTitle
            .trim()
            .toLowerCase()}&include_adult=false&language=en-US&page=1`
        );

        setSearchMovies(resp);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  };

  return (
    <>
      <Loader isLoading={isLoading} />
      <Searchbar serchMovies={serchMovies} />
      {dataSearchMovies && <MovieList dataMovies={dataSearchMovies} />}
    </>
  );
};

export default Movies;
