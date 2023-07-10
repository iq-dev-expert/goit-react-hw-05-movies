import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  // Робимо запит HTTP
  // useEffect(() => {}, []);

  return <div>Cast: {movieId}</div>;
};

export default Cast;
