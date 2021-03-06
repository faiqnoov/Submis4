const IMG_URL = 'https://image.tmdb.org/t/p/w500';

class MovieElement extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .movieEl {
          border: none;
          margin-bottom: 20px;
          background-color: var(--c4);
        }
        
        .movieEl .movie-info {
          background-color: var(--c3);
          padding: 10px;
          display: flex;
          justify-content: space-between;
        }
        
        .movieEl .movie-info h2 {
          font-size: 20px;
          font-weight: 500;
          color: var(--cText);
          margin: 0;
          align-self: center;
        }
        
        .movieEl .movie-info .rating {
          background-color: var(--c1);
          color: white;
          padding: 5px;
          border-radius: 3px;
          align-self: baseline;
        }
        
        .movieEl .movie-info .rating {
          font-weight: 500;
        }
        
        .movieEl .overview{
          padding: 10px;
        }
        
        .movieEl .overview h3 {
          font-size: 14px;
          font-weight: 600;
        }
        
        .movieEl .overview p {
          font-size: 14px;
        }
        
        .movieEl .overview {
          position: relative;
          top: 10px;
        }
      </style>

      <div class="col">
        <div class="card movieEl">
          <img
            src="${IMG_URL + this._movie.poster_path}"
            class="card-img-top" alt="poster">

          <div class="movie-info">
            <h2>${this._movie.title}</h2>
            <span class="rating">${this._movie.vote_average}</span>
          </div>

          <div class="overview">
            <h3>Overview</h3>
            <p>${this._movie.overview}</p>
          </div>
        </div>
      </div>

    `;
  }
}

customElements.define("movie-element", MovieElement);