import React from "react";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import moviesAPI from "./movieAPI";

const OneGenre = props => {
  const genre = props.match.params.genre;
  let movies = moviesAPI.getByGenre(genre);
  return (
    <div>
      <h1>{`${genre.toUpperCase()}`}</h1>
      <ul>
        {movies.map(mov => (
          <li>
            <Link to={`/movies/${mov.id}`} key={mov.id}>
              {mov.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const AllGenres = () => {
  let genres = moviesAPI.getGenres();
  return (
    <div>
      <h1>GENRES</h1>
      <ul>
        {genres.map(genre => (
          <li>
            <Link to={`/genres/${genre}`} key={genre}>
              {genre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Genres = () => (
  <div>
    <Switch>
      <Route exact path="/genres" render={AllGenres} />
      <Route path="/genres/:genre" render={OneGenre} />
    </Switch>
  </div>
)

export default Genres;
