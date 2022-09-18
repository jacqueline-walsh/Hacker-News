import React, { useEffect, useState } from "react";
import { getStoryIds, newStoriesUrl, topStoriesUrl } from "../services/api";
import { usePaginationScroll } from "../hooks/useScrollPagination";
import FilterStories from "./FilterStories";
import Story from "./Story";
import "../styles/storyContainer.css";

const StoriesContainer = () => {
  // destructuring from usePaginationScroll custom hook
  const { count } = usePaginationScroll();

  // state to hold and set data
  const [storyIds, setStoryIds] = useState([]);
  const [storyOption, setStoryOption] = useState(newStoriesUrl);

  useEffect(() => {
    // This will call the getStoryId function within the api passing
    // the type of news stories ids to return.  This is triggered on 1st render
    // and on change of the storyOption state.
    getStoryIds(storyOption).then((data) => setStoryIds(data));
  }, [storyOption]);

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

      {storyIds.slice(0, count).map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </div>
  );
};

export default StoriesContainer;
