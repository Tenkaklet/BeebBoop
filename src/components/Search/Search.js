import React, { Component } from 'react';
import soundcloud from '../../soundcloud/soundcloud';
import './Search.css';
import Results from '../Results/Results';
class Search extends Component {

    state = { searchTerm: '', type: 'users', results: [] };

    onSearch = term => {
        term.preventDefault();
        if (this.state.type === 'users') {
            soundcloud.get('/users', {
                params: { q: this.state.searchTerm, client_id: 'c4406f6ecae1bc714e536b66d0bbf74d' }
            }).then(user => {
                this.setState({results: user.data});
            });
        } else if (this.state.type === 'tracks') {
            soundcloud.get('/tracks', {
                params: { q: this.state.searchTerm, client_id: 'c4406f6ecae1bc714e536b66d0bbf74d' }
            }).then(tracks => {
                this.setState({results: tracks.data});
            });
        }
    };

    onChange = select => {
        this.setState({type: select});
    };

    render() {
        return (
                <div className="ui container" id="Search">
                <h1>Search</h1>
                <form onSubmit={this.onSearch} className="ui form">
                    <div className="ui huge icon input" id="search-bar">
                        <input type="text" placeholder="Search image artist song or playlist..." value={this.state.searchTerm} onChange={e => this.setState({ searchTerm: e.target.value })} />
                        <i className="search icon" />
                    </div>
                    <select className="ui dropdown" onChange={e => this.onChange(e.target.value)} id="select-dropdown" value={this.state.type}>
                        <option value="users">Users</option>
                        <option value="tracks">Song</option>
                    </select>
                    <button className="ui button" type="submit">Search</button>
                </form>
                <Results results={this.state.results} />
            </div>
        );
    }
}

export default Search;