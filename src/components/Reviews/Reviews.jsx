import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getReviews } from 'utils/js/fetch';

const Reviews = () => {
  const [dataReviews, setDataReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const resp = await getReviews(movieId);

        if (resp.length === 0) {
          setError(true);
        }

        setDataReviews(resp);
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
          {dataReviews.map(({ author, content, id }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
