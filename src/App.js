import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="ui menu">
          <div className="header item">Photo Owl</div>
          <Link to="/" className="item">Home</Link>
          <Link to="/search" className="item">Search</Link>
          <a className="item">About The Project</a>
        </nav>
        <Switch>
          <Route path="/search">            
            <Search />
          </Route>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
