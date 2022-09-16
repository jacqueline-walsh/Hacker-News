import { mount } from "enzyme";
import FilterStories from "../components/FilterStories";

const { newStoriesUrl, topStoriesUrl, storyOption, setStoryOption } = props;
it("should test filter label", () => {
  const wrapper = mount(
    <FilterStories
      newStoriesUrl={newStoriesUrl}
      topStoriesUrl={topStoriesUrl}
      storyOption={storyOption}
      setStoryOption={setStoryOption}
    />
  );
  expect(wrapper.find(["data-qa-id=filter-label"]))
    .text()
    .toContain("Select Story");
});
