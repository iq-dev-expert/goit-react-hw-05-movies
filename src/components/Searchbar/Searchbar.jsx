import { useSearchParams } from 'react-router-dom';

const Searchbar = () => {
  const [, setSearchParams] = useSearchParams();

  const onSearchButtonClick = e => {
    e.preventDefault();
    const inputValue = e.target.query.value.trim().toLowerCase();

    if (!inputValue) {
      return;
    }

    setSearchParams({ query: inputValue });
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={onSearchButtonClick}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />

        <button type="submit">
          <span>Search</span>
        </button>
      </form>
    </>
  );
};

export default Searchbar;
