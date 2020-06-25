import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        return(
            <select onChange={this.props.handleChoice} name="animals" id="animals">
                <option value="All">All</option>
                <option value="Cats">Cats</option>
                <option value="Dogs">Dogs</option>
            </select>
        )
    }
}

export default Dropdown;