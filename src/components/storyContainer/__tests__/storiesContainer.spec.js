import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import axios from "axios";
import { individualStory } from "../../../mocks";
import { getStory } from "../../../services/api";
import StoryContainer from "../StoryContainer";
import Filter from "../../filter/FilterStories";
import Pagination from "../../pagination/Pagination";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Render Story Container test suite", () => {
  it("should render the story container title", () => {
    const wrapper = shallow(<StoryContainer />);
    expect(wrapper.find('[data-qa-id="container-title"]').text()).toContain(
      "Hacker News -"
    );
  });

  it("renders story component", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: individualStory })
    );

    await getStory(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("should render filter component", () => {
    const wrapper = shallow(<StoryContainer />);
    expect(wrapper.containsMatchingElement(<Filter />)).toEqual(true);
  });

  it("should render Pagination component", () => {
    const wrapper = shallow(<StoryContainer />);
    expect(wrapper.containsMatchingElement(<Pagination />)).toEqual(true);
  });
});
