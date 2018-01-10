import React from "react";
import { Link } from "react-router-dom";
import Home from ".././Home";

// The PetList iterates over the array of pets and creates
// a link to each one's individual page.
const MovieListC = ({ pets }) => (
  <div>
    <Home />
    <ul>
      {pets.map(pet => (
        <li>
          <Link to={`/movies/${pet.id}`} key={pet.id}>
            {pet.id} : {pet.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default MovieListC;