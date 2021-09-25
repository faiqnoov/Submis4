const API_KEY = 'api_key=1ebefdee75674063eadb23b4025632b1';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;

// kenapa harus dibuat class? kok gak function aja?
class DataSource {
  static searchMovie(keyword) {
    // return fetch(`${searchURL}&query=${keyword}`)
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=1ebefdee75674063eadb23b4025632b1&query=${keyword}`)
      .then(resp => {
        return resp.json();
      })
      .then(respJson => {
        if (respJson.results) {
          return Promise.resolve(respJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`)
        }
      })
  }

  // static getMovies(url) {
  //   return fetch(url)
  //     .then(resp => {
  //       return resp.json();
  //     })
  //     .then(respJson => {
  //       console.log(respJson.results);

  //       return Promise.resolve(respJson.results);
  //     })
  // }
}

export default DataSource;