import React from "react";

const Settings = () => (
  <>
  <header className="Header">
    <div className="Header_Content">
      <h1 className="Header_Banner Header_Banner__color-default">School CI server</h1>
    </div>
  </header>

  <div className="Content">
    <div className="FormField">
      <h2 className="FormField_H2">Settings</h2>
      <p className="FormField_Description">Configure repository connection and synchronization settings.</p>

      <div className="InputForm">
        <p className="InputForm_Name">GitHub repository <span className="InputForm_Bind">*</span></p>
        <div className="InputForm_Field">
          <input className="InputForm_Input" type="text" placeholder="user-name/repo-name" name="reposetory"/>
          <button className="Button Button__color-close">
            <span className="Icon Icon__size-xs Icon__img-close"></span>
          </button>
        </div>
      </div>

      <div className="InputForm">
        <p className="InputForm_Name">Build command</p>
        <div className="InputForm_Field">
          <input className="InputForm_Input" id="command" type="text" placeholder="npm ci && npm run build" defaultValue="npm ci && npm run build"/>
          <button className="Button Button__color-close">
            <span className="Icon Icon__size-xs Icon__img-close"></span>
          </button>
        </div>
      </div>

      <div className="InputForm">
        <p className="InputForm_Name">Main branch</p>
        <div className="InputForm_Field">
          <input className="InputForm_Input" type="text" defaultValue="master" placeholder="master"/>
          <button className="Button Button__color-close">
            <span className="Icon Icon__size-xs Icon__img-close"></span>
          </button>
        </div>
      </div>

      <div className="InputForm InputForm__flex-active">
        <p className="InputForm_Name InputForm_Name__indent-none InputForm_Name__indent-rigth">Synchronize every</p>
        <div className="InputForm_Field  InputForm_Field__sizeWidth-small InputForm_Field__position-rigth">
          <input className="InputForm_Input InputForm_Input__sizeWidth-small" type="text" maxLength="2" placeholder="10" name="minutes" defaultValue="10" />
        </div>
        <span className="InputForm_Span">minutes</span>
      </div>

      <div className="ButtonsField ButtonsField__indent-topXl">
        <button className="Button Button__indentRigth-s Button__indentBottom-s Button__height-action Button__color-action Button__padding-action">
          <span className="Text Text__size-m Text__lineHeight-xxxxl Text__weight-small Text__color-default">Save</span>
        </button>
        <button className="Button Button__color-control Button__padding-action Button__height-action Button__indentBottom-xl">
          <span className="Text Text__size-m Text__lineHeight-xxxxl Text__weight-small Text__color-default">Cancel</span>
        </button>
      </div>
    </div>
  </div>
  </>
);

export default Settings;