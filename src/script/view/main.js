import '../component/movie-list.js'
import DataSource from "../data/data-source.js";

const API_KEY = 'api_key=1ebefdee75674063eadb23b4025632b1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = () => {

  // const movieList = document.querySelector('.movieList');
  // const form = document.getElementById('searchForm');
  const movieList = document.querySelector("movie-list");
  const searchEl = document.querySelector('#searchForm');



  // function showMovies(data) {
  //   movieList.innerHTML = '';

  //   if (typeof (data) === "string") {
  //     data = JSON.parse(data)
  //   }
  //   data.forEach(movie => {
  //     const { title, poster_path, vote_average, overview } = movie;

  //     const cont1 = document.createElement('div');
  //     cont1.classList.add('col');

  //     const cont2 = document.createElement('div');
  //     cont2.classList.add('card', 'movieEl');
  //     cont2.innerHTML = `
  //       <img src="${IMG_URL + poster_path}" class="card-img-top" alt="${title}">

  //       <div class="movie-info">
  //         <h2>${title}</h2>
  //         <span class="rating ${getColor(vote_average)}">${vote_average}</span>
  //       </div>

  //       <div class="overview">
  //         <h3>Overview</h3>
  //         <p>${overview}</p>
  //       </div>
  //     `;

  //     cont1.appendChild(cont2);
  //     movieList.appendChild(cont1);
  //   })
  // }

  function getColor(vote) {
    if (vote >= 8) {
      return 'green'
    } else if (vote >= 5) {
      return 'orange'
    } else {
      return 'red'
    }
  }

  const onSearchSubmited = async () => {
    try {
      const result = await DataSource.searchMovie(searchEl.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = results => {
    movieList.movies = results;
  };

  const fallbackResult = message => {
    movieList.renderError(massage);
  }

  // searchEl.onsubmit = onSearchSubmited;
  searchEl.addEventListener('keyup', (e) => {
    if (e.key === 13) {
      e.preventDefault();
      alert("enter ditekan");
      onSearchSubmited();
    }
  })
}

export default main;