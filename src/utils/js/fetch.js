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
    const { title, name, vote_average, overview, genres, poster_path } =
      resp.data;

    const dataMovie = {
      title,
      name,
      vote_average,
      overview,
      genres,
      poster_path,
    };

    return dataMovie;
  } catch (error) {
    throw new Error(error);
  }
}

async function getCast(URL) {
  try {
    const resp = await axios.get(URL);
    const { cast } = resp.data;

    const dataCast = cast.map(({ name, character, profile_path, id }) => ({
      name,
      character,
      profile_path,
      id,
    }));

    return dataCast;
  } catch (error) {
    throw new Error(error);
  }
}

async function getReviews(URL) {
  try {
    const resp = await axios.get(URL);
    const { results } = resp.data;

    const dataReviews = results.map(({ author, content, id }) => ({
      author,
      content,
      id,
    }));

    return dataReviews;
  } catch (error) {
    throw new Error(error);
  }
}

export { getTrending, getMovieDetails, searchMovies, getCast, getReviews };
