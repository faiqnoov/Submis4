import './movie-element.js';

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        h2 {
          color: gray;
        }
      </style>
      <h2>${message}</h2>
    `;
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.innerHTML += `
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 movieList">
      </div>  
    `
    this._movies.forEach(movie => {
      const movieItemElement = document.createElement("movie-element");
      movieItemElement.movie = movie;
      this.shadowDOM.appenchild(movieItemElement);
    })
  }
}

customElements.define("movie-list", MovieList);