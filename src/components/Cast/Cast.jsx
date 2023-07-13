import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgNotFound from 'images/image-not-found.png';
import Loader from 'components/Loader/Loader';
import { getCast } from 'utils/js/fetch';

const Cast = () => {
  const [dataCast, setDataCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const resp = await getCast(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=38126fe3d6cea635722ecf700f4bc3bf&language=en-US`
        );

        setDataCast(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <ul>
          {dataCast.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
              ) : (
                <img src={imgNotFound} alt={name} width={200} height={300} />
              )}
              <p>Actor: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
