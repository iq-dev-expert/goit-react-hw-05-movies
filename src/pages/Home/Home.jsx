import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import { getTrending } from 'utils/js/fetch';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [dataMovieList, setDataMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const resp = await getTrending(
          'https://api.themoviedb.org/3/trending/all/day?api_key=38126fe3d6cea635722ecf700f4bc3bf'
        );

        setDataMovieList(resp);
      } catch (error) {
        throw new Error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {dataMovieList && <MovieList dataMovies={dataMovieList} />}
    </>
  );
};

export default Home;
