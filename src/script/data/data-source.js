const API_KEY = 'api_key=1ebefdee75674063eadb23b4025632b1';
const BASE_URL = 'https://api.themoviedb.org/3';
const popularURL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

// kenapa harus dibuat class? kok gak function aja?
class DataSource {
  static searchMovie(keyword) {
    return fetch(`${searchURL}&query=${keyword}`)
      .then(resp => {
        return resp.json();
      })
      .then(respJson => {
        if (respJson.results) {
          console.log(respJson.results);
          return Promise.resolve(respJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`)
        }
      })
  }

  static getPopularMovies() {
    return fetch(popularURL)
      .then(resp => {
        return resp.json();
      })
      .then(respJson => {
        console.log(respJson.results);
        return Promise.resolve(respJson.results);
      })
  }
}

export default DataSource;