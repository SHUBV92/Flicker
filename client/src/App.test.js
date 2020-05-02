import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { get } from "http";

describe("App Component", () => {
  it("renders learn react link", () => {
    console.log("render: ", render(<App />) )
    const { getByText } = render(<App />);
    console.log("Get By Text: ", getByText(/topic/));
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders the correct Component of the clicked <Link /> tag", () => {
    expect();
  });
});
