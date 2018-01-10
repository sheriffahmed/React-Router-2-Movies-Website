import React from "react";
import { Link } from "react-router-dom";

const MovieC = ({ name, genre, opinion }) => (
  <div>
    <div>
      <h1>{name}</h1>
      <h2> Genre: {genre}</h2>
      <h2> Opinion: {opinion}</h2>

      <Link to="/movies">Back</Link>
    </div>
  </div>
);

export default MovieC;
