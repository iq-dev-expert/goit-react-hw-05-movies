import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import imgNotFound from 'images/image-not-found.png';
import Loader from 'components/Loader/Loader';
import { getCast } from 'utils/js/fetch';

const Cast = () => {
  const [dataCast, setDataCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const resp = await getCast(movieId);

        if (resp.length === 0) {
          setError(true);
        }

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
      {!error ? (
        <ul className="py-5">
          {dataCast.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              <div className="w-50 h-76">
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img src={imgNotFound} alt={name} />
                )}
              </div>
              <p>Actor: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any cast for this movie.</p>
      )}
    </>
  );
};

export default Cast;
