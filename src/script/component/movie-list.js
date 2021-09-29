import './movie-element.js';

class MovieList extends HTMLElement {
  set text(text) {
    this._text = text;
    this.render();
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `
      <style>
        h3 {
          color: gray;
        }
      </style>
      <h3>${message}</h3>
    `;
  }

  render() {
    this.innerHTML = "";
    this.innerHTML += `
      <style>
        .subjudul {
          height: 50px;
        }
        .subjudul h2 {
          text-align: center;
          align-self: center;
          color: var(--cText);
          font-weight: 300;
        }
        .movieList {
          margin-top: 50px;
        }
      </style>
      <div class="subjudul">
        <h2>${this._text}</h2>
      </div>
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