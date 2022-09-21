import React from "react";
import { shallow, mount, render } from "enzyme";

import Pagination from "../components/pagination/Pagination";

describe("Pagination", () => {
  it("should render the pagination div", () => {
    const component = mount(<Pagination />);

    expect(component.find(".pagination").length).toBe(1);
  });
});
