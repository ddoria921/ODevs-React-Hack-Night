import React, { Component } from 'react';

class SearchSuggestion extends Component {
  render() {
    return (
      <div>
        {this.props.suggestion}
      </div>  
    );
  }
}

// Export dependencies like this:
export default SearchSuggestion;    
