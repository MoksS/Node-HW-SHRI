import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Text from "./Text";

const Logo = () => (
  <>
    <div className="Logo">
      <img className="Logo_Img" src="/icon/logo.svg" alt="LOGO" />
      <p className="Logo_Text">Configure repository connection and synchronization settings</p>
      <Link to="/settings">
        <Button style={{ color: "action", padding: "action" }}>
          <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>Open settings</Text>
        </Button>
      </Link>
    </div>
  </>
)


export default Logo;