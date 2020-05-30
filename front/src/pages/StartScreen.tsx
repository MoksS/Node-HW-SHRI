import React, { FC } from "react";
import { Link, Redirect } from "react-router-dom"
import Header from "../component/Header";
import Logo from "../component/Logo";
import Button from "../component/Button";
import Icon from "../component/Icon";
import Text from "../component/Text";
import {useSelector} from "react-redux";
import { StateInteface } from "../store";

const StartScreen: FC = () => {
  const state = useSelector((state: StateInteface) => state.setting);
  
  const { lang } = window;

  return(
  state !== "/" ? <Redirect to="/build"/> :
    <>
      <Header text="School CI server">
        <Link to="/settings">
          <Button style={{ color: "control", padding: "control", height: "default" }}>
            <Icon style={{ size: "xl", img: "control" }} />
            <Text style={{ size: "m", lineHeight: "xxl", weight: "small", color: "default", hide: "on" }}>
              {lang.StartScreen.Button.Settings}
            </Text>
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
