import axios from 'axios';

async function getTrending(URL) {
  try {
    const resp = await axios.get(URL);

    const { results } = resp.data;

    const dataMovieList = results.map(({ id, title, name }) => ({
      id,
      title,
      name,
    }));
    return dataMovieList;
  } catch (error) {
    throw new Error(error);
  }
}

async function searchMovies(URL) {
  try {
    const resp = await axios.get(URL);
    const { results } = resp.data;

    const dataMovieList = results.map(({ id, title }) => ({
      id,
      title,
    }));
    return dataMovieList;
  } catch (error) {
    throw new Error(error);
  }
}

async function getMovieDetails(URL) {
  try {
    const resp = await axios.get(URL);

    const { title, name, vote_average, overview, genres } = resp.data;
    const dataMovie = { title, name, vote_average, overview, genres };

    return dataMovie;
  } catch (error) {
    throw new Error(error);
  }
}

export { getTrending, getMovieDetails, searchMovies };
