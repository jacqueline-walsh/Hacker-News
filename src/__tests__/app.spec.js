import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { individualStory, storyIds } from "../mocks";
import { getStory, getStoryIds } from "../services/api";
Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios");

beforeEach(() => {
  jest.resetAllMocks();
});

jest.mock("../services/api", () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

describe("Renders Hacker News test suite", () => {
  it("should render the Hacker News", async () => {
    getStory.mockImplementation(() => Promise.resolve(individualStory));
    getStoryIds.mockImplementation(() => Promise.resolve(storyIds));
  });
});
