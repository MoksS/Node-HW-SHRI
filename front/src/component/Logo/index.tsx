import React, { FC } from "react";
import { Link } from "react-router-dom";
import Button from "./../Button";
import Text from "./../Text";
import "./Logo.scss";
import logoImg from "../../icon/logo.svg"

const Logo: FC = () => {
  const { lang } = window;

  return (
    <>
      <div className="Logo">
        <img className="Logo_Img" src={logoImg} alt="LOGO" />
        <p className="Logo_Text">
          {lang.Logo.Text}
        </p>
        <Link to="/settings">
          <Button style={{ color: "action", padding: "action" }}>
            <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>
              {lang.Logo.Button.OpenSettings}
            </Text>
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Logo;