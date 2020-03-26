import React from "react";
import Header from "../component/Header"

const StartScreen = () => (
  <>
    <Header text="School CI server">
      <div className="ButtonsField">
        <button className="Button Button__color-control Button__padding-control Button__height-default">
          <span className="Icon Icon__size-xl Icon__img-control"></span>
          <span className="Text Text__size-m Text__lineHeight-xxl Text__weight-small Text__color-default Text__hide-on">Settings</span>
        </button>
      </div>
    </Header>

    <div className="Content Content__center-on">
      <div className="Logo">
        <img className="Logo_Img" src="../icon/logo 3.svg" alt="LOGO" />
        <p className="Logo_Text">Configure repository connection and synchronization settings</p>
        <button className="Button Button__color-action Button__padding-action">
          <span className="Text Text__size-m Text__lineHeight-xxxxl Text__weight-small Text__color-default">Open settings</span>
        </button>
      </div>
    </div>
  </>
);

export default StartScreen;