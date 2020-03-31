import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import ButtonsField from "./ButtonsField";
import { host } from "../helpers/constant";
import Text from "./Text";

const PopUp = ({ hide }) => {
  const formEl = useRef(null);
  const history = useHistory();
  const onSaveClick = async (e) => {
    const bt1 = e.currentTarget;
    const bt2 = bt1.nextSibling;

    bt1.setAttribute("disabled", "disabled");
    bt2.setAttribute("disabled", "disabled");

    try {
      const formData = new FormData(formEl.current);

      const response = await fetch(`${host}/api/builds/${formData.get("commitHash")}`, {
        method: 'POST'
      });

      const result = await response.json();

      console.log(result);

      history.push(`/build/${result.data.id}`);

    } catch (error) {
      console.log(error);
    }

    bt1.removeAttribute("disabled");
    bt2.removeAttribute("disabled");
  };

  return (
    <div className="PopUp">
      <Form
        header="New Build"
        descripton="Enter the commit hash which you want to build."
        name="newBuild"
        method="post"
        formRef={formEl}
      >
        <Input
          type="text"
          placeholder="Commit Hash"
          name="commitHash"
        />

        <ButtonsField>
          <Button
            style={{ indentRigth: "s", indentBottom: "s", height: "action", color: "action", padding: "action" }}
            onClick={onSaveClick}
          >
            <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>Run build</Text>
          </Button>
          <Button
            onClick={hide}
            style={{ color: "close", padding: "action", height: "action", indentBottom: "xl" }}>
            <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>Cancel</Text>
          </Button>
        </ButtonsField>
      </Form>
    </div>
  )
}

export default PopUp;