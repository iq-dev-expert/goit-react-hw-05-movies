import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '38126fe3d6cea635722ecf700f4bc3bf' };

async function getTrending() {
  const URL = '/trending/all/day';

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

async function searchMovies(query) {
  const URL = `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

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

async function getMovieDetails(movieId) {
  const URL = `/movie/${movieId}`;

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

async function getCast(movieId) {
  const URL = `/movie/${movieId}/credits?language=en-US`;

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

async function getReviews(movieId) {
  const URL = `/movie/${movieId}/reviews?language=en-US&page=1`;

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
