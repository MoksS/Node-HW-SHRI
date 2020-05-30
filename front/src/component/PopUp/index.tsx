import React, { useRef, useState, FC, MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import Form from "./../Form";
import Input from "./../Input";
import Button from "./../Button";
import ButtonsField from "./../Button/ButtonsField";
import { host } from "../../helpers/constant";
import Text from "./../Text";
import "./PopUp.scss";

export interface PopUpProps {
  hide(event: MouseEvent<HTMLButtonElement>): void;
}

const PopUp: FC<PopUpProps> = ({ hide }) => {
  const [error, setError] = useState("");
  const formEl = useRef<HTMLFormElement>(null);
  const history = useHistory();

  const { lang } = window;

  const onSaveClick= async (e: MouseEvent<HTMLButtonElement> ) => {
    const bt1 = e.currentTarget;
    const bt2 = bt1.nextSibling as HTMLButtonElement;

    bt1.setAttribute("disabled", "disabled");
    bt2.setAttribute("disabled", "disabled");

    try {
      setError("");

      const formData = new FormData(formEl.current!);

      const response = await fetch(`${host}/api/builds/${formData.get("commitHash")}`, {
        method: 'POST'
      });

      const result = await response.json();

      if(response.status >= 400) {
        setError(result.data);
        bt1.removeAttribute("disabled");
        bt2.removeAttribute("disabled");
        return;
      }

      history.push(`/build/${result.data.id}`);

    } catch (error) {
      setError(error);
      console.log(error);
    }

    bt1.removeAttribute("disabled");
    bt2.removeAttribute("disabled");
  };

  return (
    <div className="PopUp">
      <Form
        header={ lang.PopUp.Form.header }
        descripton={ lang.PopUp.Form.descripton }
        name="newBuild"
        method="post"
        formRef={formEl}
      >
        <Input
          type="text"
          placeholder={ lang.PopUp.Input.commitHash.placeholder }
          name="commitHash"
        />

        <ButtonsField>
          <Button
            style={{ indentRigth: "s", indentBottom: "s", height: "action", color: "action", padding: "action" }}
            onClick={onSaveClick}
          >
            <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>
            { lang.PopUp.Button.RunBuild }
            </Text>
          </Button>
          <Button
            onClick={hide}
            style={{ color: "close", padding: "action", height: "action", indentBottom: "xl" }}>
            <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>
            { lang.PopUp.Button.Cancel }
            </Text>
          </Button>
        </ButtonsField>
        <Text style={{size: "l", weight: "normal", lineHeight: "xxl", color: "red"}}>{error}</Text>
      </Form>
    </div>
  )
}

export default PopUp;