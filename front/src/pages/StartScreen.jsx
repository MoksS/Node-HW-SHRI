import React from "react";
import Header from "../component/Header";
import Logo from "../component/Logo";
import Button from "../component/Button";
import Icon from "../component/Icon";
import Text from "../component/Text";

const StartScreen = () => (
  <>
    <Header text="School CI server">
        <Button style={{color: "control", padding: "control", height: "default"}}>
          <Icon style={{size: "xl", img: "control"}}/>
          <Text style={{size: "m", lineHeight: "xxl", weight: "small", color: "default", hide: "on"}}>Settings</Text>
        </Button>
    </Header>

    <div className="Content Content__center-on">
      <Logo />
    </div>
  </>
);

export default StartScreen;