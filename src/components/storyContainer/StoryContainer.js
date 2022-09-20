import React, { useEffect, useState } from "react";
import { getStoryIds, newStoriesUrl, topStoriesUrl } from "../../services/api";
import FilterStories from "../filter/FilterStories";
import Pagination from "../pagination/Pagination";
import Story from "../story/Story";
import "./storyContainer.css";

const StoryContainer = () => {
  // Pagination
  // getter and setter for the current page.  Default to be page 1
  const [currentPage, setCurrentPage] = useState(1);
  //  getter and setter for the number of stories per page to be shown.  Default to 30
  const [storiesPerPage] = useState(30);

  // getter and setter for the data returned from the getStoryIds api function call
  const [storyIds, setStoryIds] = useState([]);
  // getter ad setter for the option type whether it is top stories or new stories from the filter option
  const [storyOption, setStoryOption] = useState(newStoriesUrl);

  useEffect(() => {
    // This will call the getStoryId function within the api passing
    // the type of news stories ids to return.  This is triggered on 1st render
    // and on change of the storyOption state.
    getStoryIds(storyOption).then((data) => setStoryIds(data));
  }, [storyOption]);

  // Pagination
  // calculates and stores the last index for the page
  const lastStoryIndex = currentPage * storiesPerPage;
  // calculates and stores the first index for the page
  const firstStoryIndex = lastStoryIndex - storiesPerPage;
  // takes the storyIds array and stores the stories from the first story index
  // to the last story index as calculated above
  const currentStoryIds = storyIds.slice(firstStoryIndex, lastStoryIndex);

  return (
    <div className="container">
      <h1 data-qa-id="container-title" className="container-title">
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

export default StoryContainer;
