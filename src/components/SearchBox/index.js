import React, { Component } from 'react';

import './index.scss';

import Suggestion from './Suggestion';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value}, () => {
      this.props.onSearch(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <input type="text" className="searchBox" onChange={this.onChange}/>
        <br/>
        <div className="suggestionBox">
          {this.props.suggestions.map((suggestion, index) => {
            return <Suggestion key={index} suggestion={suggestion} />
          })}
        </div>
      </div>
    );
  }
}

// Export dependencies like this:
export default SearchBox;    
