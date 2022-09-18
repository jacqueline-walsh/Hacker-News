import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilterStories from "../components/FilterStories";
import { newStoriesUrl, topStoriesUrl } from "../services/api";

Enzyme.configure({ adapter: new Adapter() });

describe("Select Filter for Stories test suite", () => {
  const wrapper = mount(
    <FilterStories
      newStoriesUrl={newStoriesUrl}
      topStoriesUrl={topStoriesUrl}
    />
  );

  it("should test filter label", () => {
    expect(wrapper.find('[data-qa-id="filter-label"]').text()).toContain(
      "Select Story:"
    );
  });

  it("should test filter options label", () => {
    expect(wrapper.find("option").first().text()).toBe("New Stories");
    expect(wrapper.find("option").last().text()).toBe("Top Stories");
  });

  it("should select top stories when option selected", () => {
    // // Then its default value is new stories
    expect(wrapper.find('[data-qa-id="new-stories"]').props().value).toBe(
      newStoriesUrl
    );

    // // When top stories is selected
    wrapper
      .find("select")
      .simulate("click", { target: { value: topStoriesUrl } });

    // // Then its value changes to top stories
    expect(wrapper.find('[data-qa-id="top-stories"]').props().value).toBe(
      topStoriesUrl
    );
  });
});
