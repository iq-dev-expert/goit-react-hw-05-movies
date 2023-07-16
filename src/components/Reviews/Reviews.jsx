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
        const resp = await getReviews(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=38126fe3d6cea635722ecf700f4bc3bf&language=en-US&page=1`
        );

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
