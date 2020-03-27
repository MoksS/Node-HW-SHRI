import React from "react";
import Button from "./Button";
import Text from "./Text";

const Logo = () => (
  <>
    <div className="Logo">
      <img className="Logo_Img" src="/icon/logo 3.svg" alt="LOGO" />
      <p className="Logo_Text">Configure repository connection and synchronization settings</p>
      <Button style={{ color: "action", padding: "action" }}>
        <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>Open settings</Text>
      </Button>
    </div>
  </>
)


export default Logo;