import React from "react";
import PropTypes from "prop-types";
import Story from "./Story";
import StoryForm from "./StoryForm";

export default class Newsfeed extends React.Component {
  getStories() {
    const stories = this.props.stories.map((story, idx) => {
      return (
        <Story
          author={story.author}
          content={story.content}
          date={story.date}
          key={`story-${idx}`}
        />
      );
    });

    return stories;
  }

  render() {
    return (
      <div>
        <div>
          <h2> Semirah's Newsfeed</h2>
          {this.getStories()}
          <StoryForm />
        </div>
      </div>
    );
  }
}

Newsfeed.propTypes = {
  stories: PropTypes.array
};
