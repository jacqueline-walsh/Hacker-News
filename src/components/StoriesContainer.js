import React, { useEffect, useState } from "react";
import { getStoryIds, newStoriesUrl, topStoriesUrl } from "../services/api";
import FilterStories from "./FilterStories";
import Pagination from "./Pagination";
import Story from "./Story";
import "../styles/storyContainer.css";

const StoriesContainer = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [storiesPerPage] = useState(30);

  // state to hold and set data
  const [storyIds, setStoryIds] = useState([]);
  const [storyOption, setStoryOption] = useState(newStoriesUrl);

  useEffect(() => {
    // This will call the getStoryId function within the api passing
    // the type of news stories ids to return.  This is triggered on 1st render
    // and on change of the storyOption state.
    getStoryIds(storyOption).then((data) => setStoryIds(data));
  }, [storyOption]);

  const lastStoryIndex = currentPage * storiesPerPage;
  const firstStoryIndex = lastStoryIndex - storiesPerPage;
  const currentStoryIds = storyIds.slice(firstStoryIndex, lastStoryIndex);

  return (
    <div className="container">
      <h1 className="container-title">
        Hacker News -{" "}
        {storyOption === newStoriesUrl ? "New Stories" : "Top Stories"}
      </h1>
      <FilterStories
        newStoriesUrl={newStoriesUrl}
        topStoriesUrl={topStoriesUrl}
        storyOption={storyOption}
        setStoryOption={setStoryOption}
      />
      <Pagination
        totalStories={storyIds.length}
        storiesPerPage={storiesPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {currentStoryIds.map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </div>
  );
};

export default StoriesContainer;
