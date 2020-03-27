import React, { useEffect } from "react";
import Header from "../component/Header";
import Form from "../component/Form";
import ButtonsField from "../component/ButtonsField";
import Button from "../component/Button";
import Input from "../component/Input";
import Text from "../component/Text";

const Settings = () => {

  useEffect(() => {
    document.title = "Settings";
  }, []);

  return (
    <>
      <Header text="School CI server" />

      <div className="Content">
        <Form header="Settings" descripton="Configure repository connection and synchronization settings.">

          <Input
            head="GitHub repository"
            type="text"
            placeholder="user-name/repo-name"
            name="reposetory"
            bind={true}
          />

          <Input
            head="Build command"
            type="text"
            placeholder="npm ci && npm run build"
            name="command"
            bind= {true}
          />

          <Input 
            head="Main branch"
            type="text"
            placeholder="master"
            name="branch"
          />

          <Input
            head="Synchronize every"
            placeholder="10"
            name="minutes"
            span="minutes"
            textMask={[/\d/, /\d/]}
          />

          <ButtonsField style={{ indent: "topXl" }}>
            <Button style={{ indentRigth: "s", indentBottom: "s", height: "action", color: "action", padding: "action" }}>
              <Text style={{size:"m", lineHeight:"xxxxl", weight:"small", color: "default"}}>Save</Text>
            </Button>
            <Button style={{ color: "control", padding: "action", height: "action", indentBottom: "xl" }}>
              <Text style={{size:"m", lineHeight:"xxxxl", weight:"small", color: "default"}}>Cancel</Text>
            </Button>
          </ButtonsField>

        </Form>
      </div>
    </>
  )
};

export default Settings;