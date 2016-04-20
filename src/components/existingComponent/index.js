// Import NPM dependencies like this:
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './existingComplaint.scss';

class existingComplaint extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      votes: Number(this.props.votes)
    }
  }

  onClick(event) {
    this.setState({votes: this.state.votes + 1});
  };

  render() {
    return (
      <div className='existingComplaint'>
        <div onClick={() => this.onClick()} className='complaintVotes'>
          <span className='voteEmoji'>😠</span> {this.state.votes}
            <div className='voteText'>Upvotes</div>
        </div>
        <div className='complaintTitle'>
          <strong>{this.props.title}</strong>
        </div>
        <div className='complaintBody'>{this.props.description}</div>
        <div className='complaintInfo'>{this.props.date} - {this.props.location}</div>
      </div>
    );
  }
}

export default existingComplaint;
