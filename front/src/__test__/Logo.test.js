import React from "react";
import renderer from "react-test-renderer";
import Logo  from "../component/Logo";

jest.mock('react-router-dom', () => ({
  Link: (props) => <a href={props.to}>{props.children}</a>
}))



it("renders Logo correctly", () => {
  const logo = renderer
    .create(<Logo/>)
    .toJSON();

  expect(logo).toMatchSnapshot();
});

