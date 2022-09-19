import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { individualStory } from "../mocks";
import axios from "axios";
import { getStory } from "../services/api";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("axios");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Render Story test suite", () => {
  it("renders component with content", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: individualStory })
    );

    const entity = await getStory(1);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https:/hacker-news.firebaseio.com/v0/item/1.json"
    );
    expect(entity.title).toEqual("Zoom Goes Down");
    expect(entity.url).toEqual("https://anywhere.com/hackernews");
    expect(entity.by).toEqual("Joe Blogs");
  });
});
