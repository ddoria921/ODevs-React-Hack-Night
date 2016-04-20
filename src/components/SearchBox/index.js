import React, { Component } from 'react';

import './index.scss';

import Suggestion from './Suggestion';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.addSuggestion = this.addSuggestion.bind(this);
  }

  addSuggestion(suggestion) {
    this.setState({
      value: this.state.value + ' ' + suggestion
    });
  }

  onChange(event) {
    this.setState({value: event.target.value}, () => {
      this.props.onSearch(this.state.value);
    });
  }

  render() {
    return (
      <div>
        <input type="text" className="searchBox" value={this.state.value} onChange={this.onChange}/>
        <br/>
        <div className="suggestionBox">
          {this.props.suggestions.map((suggestion, index) => {
            return <Suggestion key={index} suggestion={suggestion}
              onAddSuggestion={this.addSuggestion}/>
          })}
        </div>
      </div>
    );
  }
}

// Export dependencies like this:
export default SearchBox;    
