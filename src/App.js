import StoriesContainer from "./components/storyContainer/StoryContainer";

const App = () => {
  // the only job of the app component is to load the Stories Container
  return (
    <div>
      <StoriesContainer />
    </div>
  );
};

export default App;
