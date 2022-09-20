import "./filterStories.css";

const FilterStories = ({
  // Destructuring of props
  newStoriesUrl,
  topStoriesUrl,
  storyOption,
  setStoryOption,
}) => {
  // This is a controlled function that will
  // set the story option when option has been selected
  const handleSelectedOption = (e) => {
    setStoryOption(e.target.value);
  };

  return (
    <div className="filter-stories-container">
      <label data-qa-id="filter-label" className="filter-stories-label">
        Select Story:{" "}
      </label>
      <select
        data-qa-id="filter-select"
        value={storyOption}
        onChange={handleSelectedOption}
      >
        <option data-qa-id="new-stories" value={newStoriesUrl}>
          New Stories
        </option>
        <option data-qa-id="top-stories" value={topStoriesUrl}>
          Top Stories
        </option>
      </select>
    </div>
  );
};

export default FilterStories;
