import React from "react";
import renderer from "react-test-renderer";
import Footer from "../component/Footer";

it("renders Footer correctly", () => {
  const footer = renderer
    .create(<Footer />)
    .toJSON();

  expect(footer).toMatchSnapshot();
});
