import React, { Component } from 'react';

import './index.scss'

class SearchSuggestion extends Component {
  render() {
    return (
      <span className="suggestionTag">
        {this.props.suggestion}
      </span>  
    );
  }
}

// Export dependencies like this:
export default SearchSuggestion;    
