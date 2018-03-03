import React from "react";
import PropTypes from "prop-types";

export default class StoryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    content: '',
    author: '',
    date: ''
  }

update(type, value) {
  this.setState({
    [type]: value
  });
} 


  render() {
    return (
      <div>
        Content: <input type="text" onBlur={(event) => this.update("content", event.target.value)} />
        <br />
        Author: <input type="text" onBlur={(event) => this.update("author", event.target.value)} />
        <br />
        Date: <input type="text" onBlur={(event) => this.update("date", event.target.value)} />
        <br />
        <button>Submit</button>
      </div>
    );
  }
}

StoryForm.propTypes = {};
