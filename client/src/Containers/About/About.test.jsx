import React from "react";
import { render } from "@testing-library/react";
import { get } from "http";
import About from "./About"

describe("App Component", () => {
  it("renders learn react link", () => {
    console.log("render: ", render(<About />) )
    const { getByText } = render(<About />);
    console.log("Get By Text: ", getByText(/topic/));
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders the correct Component of the clicked <Link /> tag", () => {
    expect();
  });
});
