import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pagination from "../components/Pagination";
import StoriesContainer from "../components/storiesContainer";

Enzyme.configure({ adapter: new Adapter() });

// const storyList = ["item1", "item2", "item3", "item4"];

// jest.mock(() => ({
//   paginate: jest.fn().mockResolvedValue({
//     items: storyList.slice(0, 2),
//     meta: {
//       itemCount: 2,
//       totalItems: 2,
//       totalPages: 1,
//       currentPage: 1,
//     },
//   }),
// }));

const wrapper = mount(
  <StoriesContainer
  // totalPosts="10"
  // postsPerPage="5"
  // setCurrentPage="1"
  // currentPage="1"
  />
);
describe("Paginatyion for Stories test suite", () => {
  it("should change page when page button clicked", () => {
    console.log(wrapper.debug());
  });
});
