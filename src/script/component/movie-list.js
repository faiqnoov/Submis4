import './movie-element.js';

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `
      <style>
        h2 {
          color: gray;
        }
      </style>
      <h2>${message}</h2>
    `;
  }

  render() {
    this.innerHTML = "";
    this.innerHTML += `
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 movieList">
    </div>
    `;

    this._movies.forEach(movie => {
      const movieElement = document.createElement("movie-element");
      movieElement.movie = movie;
      const movieList = this.querySelector('.movieList');
      movieList.appendChild(movieElement);
    })
  }
}

customElements.define("movie-list", MovieList);