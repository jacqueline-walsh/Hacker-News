import axios from "axios";
import { individualStory, storyIds, emptyStory } from "../mocks";
import { getStoryIds, getStory, storyUrl } from "../services/api";

jest.mock("axios");

describe("HackerNews Api", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("API calls test suite", () => {
    it("requests and returns a story from the api", async () => {
      axios.get.mockImplementation(() =>
        Promise.resolve({ data: individualStory })
      );

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(individualStory);
    });

    it("does not retrieve a story from the Api, but handles gracefully", async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: emptyStory }));

      const entity = await getStory(1);
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(`${storyUrl + 1}.json`);
      expect(entity).toEqual(emptyStory);
    });
  });

  describe("getStoryIds functionality", () => {
    it("requests and gets story ids from the HackerNews Api", async () => {
      axios.get.mockImplementation(() => Promise.resolve({ data: storyIds }));

      const entity = await getStoryIds();
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(entity).toEqual(storyIds);
    });
  });
});
