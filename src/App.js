import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import About from "./components/About/About";
import soundcloud from './soundcloud/soundcloud';

class App extends Component {
  state = { search: {} };
  onSearch = async term => {
    const response = await soundcloud.get('/users', {
      params: { q: term, client_id: 'c4406f6ecae1bc714e536b66d0bbf74d' }
    });
    this.setState({ search: response.data });
  };



  render() {
    return (
      <Router>
        <nav className="ui menu stackable">
          <div className="header item">BeepBoop</div>
          <Link to="/" className="item">Home</Link>
          <Link to="/search" className="item">Search</Link>
          <Link to="/about" className="item">About The Project</Link>
        </nav>
        <Switch>
          <Route path="/search">
            <Search searchMusic={this.onSearch} />
          </Route>
          <Route path="/about">
            <About />
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
