import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Movies from "./Movies/Movies";
import Genres from "./Movies/Genre";

import Home from "./Home";

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {"  "}
      <Link to="/movies">Movies</Link>
      {" "}
      <Link to="/genres">Genres</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/genres" component={Genres} />

    </Switch>
  </div>
);

export default App;
