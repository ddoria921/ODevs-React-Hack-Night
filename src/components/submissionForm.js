import React from 'react';

class SubmissionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      description: ''
    };
  }

  resetState() {
    this.setState({
      author: '',
      description: ''
    });
  }

  handleAuthorChange(e) {
    // this.setState({author: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({text: e.target.value});
  }

  // @param text: string to parse
  // @return an array of tags found or empty array if none found
  getTagsFrom(text) {
    var tags = [];
    
    if (!text || !text.length) {
      return tags;
    }

    text.split(' ').forEach((word) => {
      if (word.charAt(0) === '#') {
        tags.push(word.slice(1));
      }
    });

    return tags;
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }

    // TODO: send request to the server
    if (typeof this.props.onPostSubmit === 'function') {
      this.props.onPostSubmit({
        author: this.state.author,
        title: this.state.title,
        text: this.state.description,
        tags: this.getTagsFrom(this.state.description),
        createdAt: new Date().toString()
      });
    } else {
      console.warn('No submit callback found for SubmissionForm');
    }

    this.resetState();
  }

  render() {
    // console.log('Tags: ', this.getTagsFrom('Hello world #live'));
    return (
      <form className="submissionForm" onSubmit={this.handleSubmit}>
        
        <label htmlFor="author">Name</label>
        <input
          id="author"
          type="text"
          placeholder="name"
          value={this.state.author}
        />

        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Crack in road"
          value={this.state.title}
        />

        <label htmlFor="submission_description">Description</label>
        <textarea
          id="submission_description"
          type="text"
          placeholder="Description goes here..."
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />







        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SubmissionForm;
