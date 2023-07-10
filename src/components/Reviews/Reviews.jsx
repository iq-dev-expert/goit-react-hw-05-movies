import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  // Робимо запит HTTP
  // useEffect(() => {}, []);

  return <div>Reviews: {movieId}</div>;
};

export default Reviews;
