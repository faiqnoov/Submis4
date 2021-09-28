import '../component/movie-list.js'
import DataSource from "../data/data-source.js";

const main = () => {

  const form = document.getElementById('searchForm');
  const movieList = document.querySelector("movie-list");
  const searchEl = document.querySelector('input');

  const onSearchSubmited = async () => {
    try {
      const result = await DataSource.searchMovie(searchEl.value);
      renderResult(result);
    } catch (message) {
      console.log("wkwk error")
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    movieList.movies = results;
  };

  const fallbackResult = message => {
    movieList.renderError(message);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // alert("enter ditekan");
    onSearchSubmited();
  })
}

export default main;