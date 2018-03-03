import React from "react";
import PropTypes from "prop-types";

export default class Story extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  likePost() {
    const updatedCount = this.state.count + 1;

    this.setState({
      count: updatedCount
    });
  }

  render() {
    return (
      <div>
        <h4>
          {this.props.author} says {this.props.content} {this.props.date}
        </h4>
        <button onClick={() => this.likePost()}>Like</button>

        <div>
          <div> {this.state.count} people like this story </div>
        </div>
      </div>
    );
  }
}

Story.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string
};
