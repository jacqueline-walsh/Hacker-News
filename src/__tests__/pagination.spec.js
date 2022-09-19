import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Pagination from "../components/Pagination";

Enzyme.configure({ adapter: new Adapter() });

describe("Paginatyion for Stories test suite", () => {
  const wrapper = mount(
    <Pagination
      totalPosts="10"
      postsPerPage="5"
      setCurrentPage="1"
      currentPage="1"
    />
  );

  it("should change page when page button clicked", () => {});
});
