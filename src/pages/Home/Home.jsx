import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { getTrending } from 'utils/js/fetch';

const Home = () => {
  const [dataMovieList, setDataMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const resp = await getTrending(
          'https://api.themoviedb.org/3/trending/all/day?api_key=38126fe3d6cea635722ecf700f4bc3bf'
        );

        setDataMovieList(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && <MovieList dataMovies={dataMovieList} />}
    </>
  );
};

export default Home;
