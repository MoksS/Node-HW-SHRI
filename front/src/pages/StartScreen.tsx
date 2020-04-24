import React from "react";
import { Link, Redirect } from "react-router-dom"
import Header from "../component/Header";
import Logo from "../component/Logo";
import Button from "../component/Button";
import Icon from "../component/Icon";
import Text from "../component/Text";
import {useSelector} from "react-redux";

const StartScreen = () => {
  const state = useSelector(state => state.setting);
  
  return(
  state !== "/" ? <Redirect to="/build"/> :
    <>
      <Header text="School CI server">
        <Link to="/settings">
          <Button style={{ color: "control", padding: "control", height: "default" }}>
            <Icon style={{ size: "xl", img: "control" }} />
            <Text style={{ size: "m", lineHeight: "xxl", weight: "small", color: "default", hide: "on" }}>Settings</Text>
          </Button>
        </Link>
      </Header>

      <div className="Content Content__center-on">
        <Logo />
      </div>
    </>
  )
};

export default StartScreen;
