import React from "react";
import renderer from "react-test-renderer";
import PopUp from "../component/PopUp";

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn()
}))

it("renders PopUp correctly", () => {
  const logo = renderer
    .create(<PopUp hide={jest.fn()}/>)
    .toJSON();

  expect(logo).toMatchSnapshot();
});

