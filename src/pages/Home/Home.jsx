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
        const resp = await getTrending();
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
      <h1 className="text-4xl">Trending today</h1>
      {!isLoading && <MovieList dataMovies={dataMovieList} />}
    </>
  );
};

export default Home;
