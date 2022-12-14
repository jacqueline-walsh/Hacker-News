import React, { useState, useEffect } from "react";
import { getStory } from "../../services/api";
import { mapTime } from "../../utilities/mapTime";
import "./story.css";

const Story = ({ storyId }) => {
  // setter and getter for the individual story
  const [story, setStory] = useState({});

  useEffect(() => {
    // this will call getStory and pass the storyId so that the api make a call for
    // stories with id
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  // if there is a story and a story url this will render the story
  return story && story.url ? (
    <div className="story-container">
      <a
        className="story-link"
        rel="noreferrer"
        target="_blank"
        href={story.url}
      >
        <h2 data-qa-id="story-title" className="story-title">
          {story.title}
        </h2>
      </a>
      <hr />
      <div className="story-meta">
        <span className="story-author" data-qa-id="author-meta">
          <b>By:</b> {story.by}
        </span>
        <span className="story-time" data-qa-id="posted-meta">
          <b>Posted:</b> {mapTime(story.time)}
        </span>
      </div>
    </div>
  ) : null;
};

export default Story;
