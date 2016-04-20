import React, { Component } from 'react';

import './index.scss'

class SearchSuggestion extends Component {
  render() {
    return (
      <div className="suggestionTag"
        onClick={() => this.props.onAddSuggestion(this.props.suggestion)}>
        {this.props.suggestion}
      </div>  
    );
  }
}

// Export dependencies like this:
export default SearchSuggestion;    
