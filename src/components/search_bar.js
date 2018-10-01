import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { tern: '' };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.tern}
                    onChange={event => this.onInptChangeChange(event.target.value)} />
            </div>
        );
    }

    onInptChangeChange(tern) {
        this.setState({tern});
        this.props.onSearchTernChange(tern);
    }
}

export default SearchBar;