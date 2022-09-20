# Hacker News - Latest news feed for hackers

<img class="text-center" src="https://jacqueline-uploads.s3.eu-west-1.amazonaws.com/hacker-news-image.jpg"/>

## UX

This site has being created with minimal ux design. Basic css no frills styling libraries have been used. Flex box has provided the responsive effect with a simple media query for smaller devices.

## API

The hacker news returns a list of story ids for both 'new stories' and the 'top stories'.

- New Stories "https://hacker-news.firebaseio.com/v0/newstories.json"
- Tops Stories "https://hacker-news.firebaseio.com/v0/topstories.json"

To return the data for the stories the above id's need to be passed to the fetch request.

- Stories "https://hacker-news.firebaseio.com/v0/item/{storyId}.json"

## Components

### App Component

This component is the top level component that implements the StoryComponent.

### StoryContainer Component

The storyContainer is the container that brings together the application. It is the parent to the children components being the filter, pagination and story components and will render the application as a whole.

### Filter Component

The filter component provides the user with a selector with options to chose which news feed to access. The options are for (default) New Stories or Top Stories.

### Pagination Component

The Pagination component provides the user with a simple navigation to stories pages. Each page has been set to show 30 stories. The api returns 500 stories which has been divided by 30 stories per page to provide 17 buttons for each page.

### Story Component

The Story component will return a single story with a link title taking the user to the news article. It also shows who the story is by and the length of time that the story has been posted.

### Unit Testing

Unit Testing has been carried out with Jest and Enzyme.

## Links to resources

- [Original Live Site](https://news.ycombinator.com/)
- [API](https://github.com/HackerNews/API)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
