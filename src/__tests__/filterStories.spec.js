import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilterStories from "../components/FilterStories";
import Story from "../components/Story";

Enzyme.configure({ adapter: new Adapter() });

it("should test filter label", () => {
  const wrapper = mount(
    <FilterStories
      newStoriesUrl={Story.newStoriesUrl}
      topStoriesUrl={Story.topStoriesUrl}
      storyOption={Story.storyOption}
      setStoryOption={Story.setStoryOption}
    />
  );
  expect(wrapper.find('[data-qa-id="filter-label"]').text()).toContain(
    "Select Story"
  );
});

it("should test filter options label", () => {
  const wrapper = mount(
    <FilterStories
      newStoriesUrl={Story.newStoriesUrl}
      topStoriesUrl={Story.topStoriesUrl}
      storyOption={Story.storyOption}
      setStoryOption={Story.setStoryOption}
      value="New Stories"
    />
  );
  expect(wrapper.find("option").first().text()).toBe("New Stories");
  expect(wrapper.find("option").last().text()).toBe("Top Stories");
});
