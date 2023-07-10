import { useSearchParams } from 'react-router-dom';

const Searchbar = ({ serchMovies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('movie-title') ?? '';

  const onInputChange = e => {
    const { value } = e.target;

    value ? setSearchParams({ 'movie-title': value }) : setSearchParams({});
  };

  const onSearchButtonClick = e => {
    e.preventDefault();

    serchMovies(movieTitle);

    setSearchParams({});
  };

  return (
    <>
      <form>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={movieTitle}
          onChange={onInputChange}
        />

        <button type="submit" onClick={onSearchButtonClick}>
          <span>Search</span>
        </button>
      </form>
    </>
  );
};

export default Searchbar;
