import '../component/movie-list.js'
import DataSource from "../data/data-source.js";

const main = () => {

  const form = document.getElementById('searchForm');
  const movieList = document.querySelector("movie-list");
  const searchEl = document.querySelector('input');

  const popularMovies = async () => {
    try {
      const result = await DataSource.getPopularMovies();
      renderResult(result, 'Top 20 popular movies');
    } catch (message) {
      fallbackResult(message);
    }
  }

  const onSearchSubmited = async () => {
    try {
      const result = await DataSource.searchMovie(searchEl.value);
      renderResult(result, `Movies with "${searchEl.value}" keyword`);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results, text) => {
    movieList.movies = results;
    movieList.text = text;
  };

  const fallbackResult = message => {
    movieList.renderError(message);
  }

  popularMovies();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    onSearchSubmited();
  })
}

export default main;