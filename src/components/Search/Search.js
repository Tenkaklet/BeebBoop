import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
    render() {
        return (
            <div className="ui container" id="Search">
                    <h1>Search</h1>
                <div className="ui huge icon input" id="search-bar">
                    <input type="text" placeholder="Search image..." />
                    <i className="search icon" />
                </div>
            </div>
        );
    }
}

export default Search;