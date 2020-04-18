import React, { useRef, useState } from "react";
import renderer from "react-test-renderer";
import Form from "../component/Form";
import Input from "../component/Input";
import Button from "../component/Button";
import ButtonsField from "../component/Button/ButtonsField";
import Text from "../component/Text";

jest.mock('react-text-mask', () => props => <input type="text" {...{ ...props }} />);
// здесь у меня таже проблема что и у этих реюят https://github.com/text-mask/text-mask/issues/427

const Stub = () => {
  const formRef = useRef(null);
  return (
    <Form
      header="Settings"
      descripton="Configure repository connection and synchronization settings."
      name="settings"
      method="post"
      formRef={formRef}
    >
      <Input
        head="GitHub repository"
        type="text"
        placeholder="user-name/repo-name"
        name="repoName"
        bind={true}
      />
      <Input
        head="Build command"
        type="text"
        placeholder="npm ci && npm run build"
        name="buildCommand"
        bind={true}
      />
      <Input
        head="Main branch"
        type="text"
        placeholder="master"
        name="mainBranch"
      />
      <Input
        head="Synchronize every"
        placeholder="10"
        name="period"
        span="minutes"
        textMask={[/\d/, /\d/]}
        value={123}
      />
      <Text style={{ size: "l", weight: "normal", lineHeight: "xxl", color: "red" }}>{""}</Text>
      <ButtonsField style={{ indent: "topXl" }}>
        <Button style={{ indentRigth: "s", indentBottom: "s", height: "action", color: "action", padding: "action" }}>
          <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>Save</Text>
        </Button>
        <Button style={{ color: "control", padding: "action", height: "action", indentBottom: "xl" }}>
          <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>Cancel</Text>
        </Button>
      </ButtonsField>
    </Form>
  )
}

it("renders Form correctly", () => {
  const form = renderer
    .create(<Stub/>)
    .toJSON();

  expect(form).toMatchSnapshot();
});
