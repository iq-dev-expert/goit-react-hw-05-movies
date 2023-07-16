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
      <form onSubmit={onSearchButtonClick} className="mb-5">
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          className="w-80 mr-5"
        />

        <button
          type="submit"
          className="hover:bg-violet-300 focus:bg-violet-300 hover:border-violet-300 focus:border-violet-300"
        >
          <span>Search</span>
        </button>
      </form>
    </>
  );
};

export default Searchbar;
