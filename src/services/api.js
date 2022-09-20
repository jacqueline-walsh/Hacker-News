import axios from "axios";

export const baseUrl = "https://hacker-news.firebaseio.com/v0";
export const newStoriesUrl = `${baseUrl}/newstories.json`;
export const topStoriesUrl = `${baseUrl}/topstories.json`;
export const storyUrl = `${baseUrl}/item/`;

//  axios queries api and returns stories by list of ids
export const getStoryIds = async (storyType) => {
  try {
    const results = await axios.get(storyType).then((data) => data);
    return results.data;
  } catch (error) {
    console.log("Error", error.message);
  }
};

// axios queries api with a specific story id passed as paramater
export const getStory = async (storyId) => {
  try {
    const results = await axios
      .get(`${storyUrl}${storyId}.json`)
      .then((data) => data)
      .catch((error) => console.log(error));
    return results.data;
  } catch (error) {
    console.log("Error", error.message);
  }
};
