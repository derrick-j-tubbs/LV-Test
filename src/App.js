import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateGame from "./components/create-game.component"
import EditGame from "./components/edit-game.component";
import GameList from "./components/games-list.component";
import DeleteGame from "./components/delete-game.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Favorite Games List</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Games List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add New Favorite Game</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component = {GameList} />
          <Route path="/edit/:id" component = {EditGame} />
          <Route path="/create" component = {CreateGame} /> 
          <Route path="/delete/:id" component = {DeleteGame} />
        </div>
      </Router>
    );
  }
}

export default App;