import React from "react";
import { shallow, mount, render } from "enzyme";

import Pagination from "../components/pagination/Pagination";

describe("Pagination", () => {
  describe("when instantiating the component", () => {
    it("should render the pagination div", () => {
      const component = mount(<Pagination />);

      expect(component.find(".pagination").length).toBe(1);
    });
  });

  describe("when there is a single story", () => {
    it("should render 1 page button", () => {
      const component = mount(<Pagination totalStories={1} storiesPerPage={10} />);

      expect(component.find("button").length).toBe(1);
    });
  });
});
