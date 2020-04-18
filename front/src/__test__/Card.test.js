import React from "react";
import renderer from "react-test-renderer";
import Card from "../component/Card";

// jest.mock('react-router-dom', () => ({
//   useHistory: jest.fn()
// }))

it("renders Card correctly", () => {
  const logo = renderer
    .create(<Card 
      start={"12-09-1997 12:45"}
      duration={123422}
      status={"Success"}
      number={12}
      commit={"КОммит Коммит АГАСЬ"}
      branch={"master"}
      hash={"asd213sf213a1as2"}
      author={"MoksS"}
    />)
    .toJSON();

  expect(logo).toMatchSnapshot();
});
