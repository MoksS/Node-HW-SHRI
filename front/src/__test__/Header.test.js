import React from "react";
import renderer from "react-test-renderer";
import Header from "../component/Header";
import Button from "../component/Button";
import ButtonsField from "../component/Button/ButtonsField";
import Icon from "../component/Icon";
import Text from "../component/Text";

const Link = (props) => <a href={props.to}>{props.children}</a>

describe("Header", () => {
  it("renders Header in Start Screen correctly", () => {
    const header = renderer
      .create(
        <Header text="School CI server">
          <Link to="/settings">
            <Button style={{ color: "control", padding: "control", height: "default" }}>
              <Icon style={{ size: "xl", img: "control" }} />
              <Text style={{ size: "m", lineHeight: "xxl", weight: "small", color: "default", hide: "on" }}>Settings</Text>
            </Button>
          </Link>
        </Header>
      )
      .toJSON();

    expect(header).toMatchSnapshot();
  });

  it("renders Header in Settings correctly", () => {
    const header = renderer
      .create(<Header text="School CI server" />)
      .toJSON();

    expect(header).toMatchSnapshot();
  });

  it("renders Header in Build correctly", () => {
    const header = renderer
      .create(
        <Header
          text="MoksS/JESTTEST"
          class={{ color: "black", lineHeight: "l" }}
        >

          <ButtonsField style={{ column: "off" }}>
            <Button
              style={{ color: "control", padding: "control", height: "default" }}
            >
              <Icon style={{ size: "xl", img: "play" }} />
              <Text style={{ size: "m", lineHeight: "xxl", weight: "small", color: "default", hide: "on" }}>Run build</Text>
            </Button>

            <Link to="/settings">
              <Button style={{ color: "control", indentLeft: "s", height: "default" }}>
                <Icon style={{ size: "xl", img: "control" }} />
              </Button>
            </Link>
          </ButtonsField>
        </Header>
      )
      .toJSON();

    expect(header).toMatchSnapshot();
  });
});


