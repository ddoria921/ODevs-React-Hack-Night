import React, { Component } from 'react';

class SearchSuggestion extends Component {
  render() {
    return (
      <span>
        {this.props.suggestion}
        &nbsp;
      </span>  
    );
  }
}

// Export dependencies like this:
export default SearchSuggestion;    
