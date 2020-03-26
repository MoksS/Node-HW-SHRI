import React, { useEffect } from "react";
import Header from "../component/Header";
import ButtonsField from "../component/ButtonsField";
import Button from "../component/Button";

const Settings = () => {

  useEffect(() => {
    document.title = "Settings";
  }, []);

  return (
    <>
      <Header text="School CI server" />

      <div className="Content">
        <div className="FormField">
          <h2 className="FormField_H2">Settings</h2>
          <p className="FormField_Description">Configure repository connection and synchronization settings.</p>

          <div className="InputForm">
            <p className="InputForm_Name">GitHub repository <span className="InputForm_Bind">*</span></p>
            <div className="InputForm_Field">
              <input className="InputForm_Input" type="text" placeholder="user-name/repo-name" name="reposetory" />
              <Button style={{ color: "close" }}>
                <span className="Icon Icon__size-xs Icon__img-close"></span>
              </Button>
            </div>
          </div>

          <div className="InputForm">
            <p className="InputForm_Name">Build command</p>
            <div className="InputForm_Field">
              <input className="InputForm_Input" id="command" type="text" placeholder="npm ci && npm run build" defaultValue="npm ci && npm run build" />
              <Button style={{ color: "close" }}>
                <span className="Icon Icon__size-xs Icon__img-close"></span>
              </Button>
            </div>
          </div>

          <div className="InputForm">
            <p className="InputForm_Name">Main branch</p>
            <div className="InputForm_Field">
              <input className="InputForm_Input" type="text" defaultValue="master" placeholder="master" />
              <Button style={{ color: "close" }}>
                <span className="Icon Icon__size-xs Icon__img-close"></span>
              </Button>
            </div>
          </div>

          <div className="InputForm InputForm__flex-active">
            <p className="InputForm_Name InputForm_Name__indent-none InputForm_Name__indent-rigth">Synchronize every</p>
            <div className="InputForm_Field  InputForm_Field__sizeWidth-small InputForm_Field__position-rigth">
              <input className="InputForm_Input InputForm_Input__sizeWidth-small" type="text" maxLength="2" placeholder="10" name="minutes" defaultValue="10" />
            </div>
            <span className="InputForm_Span">minutes</span>
          </div>

          <ButtonsField style={{ indent: "topXl" }}>
            <Button style={{indentRigth: "s", indentBottom: "s", height:"action", color: "action", padding: "action"}}>
              <span className="Text Text__size-m Text__lineHeight-xxxxl Text__weight-small Text__color-default">Save</span>
            </Button>
            <Button style={{color: "control", padding: "action", height: "action", indentBottom: "xl"}}>
              <span className="Text Text__size-m Text__lineHeight-xxxxl Text__weight-small Text__color-default">Cancel</span>
            </Button>
          </ButtonsField>
        </div>
      </div>
    </>
  )
};

export default Settings;