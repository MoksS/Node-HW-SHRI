import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../component/Header";
import Form from "../component/Form";
import ButtonsField from "../component/ButtonsField";
import Button from "../component/Button";
import Input from "../component/Input";
import Text from "../component/Text";
import { host } from "../helpers/constant";
import { useDispatch } from "react-redux";

function Settings () {
  const history = useHistory();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const formEl = useRef(null);
  useEffect(() => {
    document.title = "Settings";
  }, []);

  const Back = () => {
    history.goBack();
  }

  const onSaveClick = async (e) => {
    const bt1 = e.currentTarget;
    const bt2 = bt1.nextSibling;

    bt1.setAttribute("disabled", "disabled");
    bt2.setAttribute("disabled", "disabled");

    try {
      const formData = new FormData(formEl.current);
      let jsonObject = {};

      for (const [key, value] of formData.entries()) {
        if ((key === "repoName" || key === "buildCommand") && value === "") {
          setError("Заполните обязательные поля");
          bt1.removeAttribute("disabled");
          bt2.removeAttribute("disabled");
          return;
        }
        jsonObject[key] = value;
      }
      setError("");

      const response = await fetch(`${host}/api/settings`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonObject)
      });

      console.log(response);
      const result = await response.json();
      
      if (!result.success) {
        setError(result.error);
        bt1.removeAttribute("disabled");
        bt2.removeAttribute("disabled");
        return;
      }
      dispatch({type: "settingsOn"});
      history.push("/build");

    } catch (error) {
      // если упал сервер или пропал интернет - пишешм что то, но не сегодня)
      // отправляем логи
      // и единственное мое универсальное решение, конечно же не идеальное)))
      setError("Ойейейейей кажется что то случилось");
      bt1.removeAttribute("disabled");
      bt2.removeAttribute("disabled");
    }

    bt1.removeAttribute("disabled");
    bt2.removeAttribute("disabled");
  };

  return (
    <>
      <Header text="School CI server" />

      <div className="Content">
        <Form
          header="Settings"
          descripton="Configure repository connection and synchronization settings."
          name="settings"
          method="post"
          formRef={formEl}
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
          />
          <Text style={{size: "l", weight: "normal", lineHeight: "xxl", color: "red"}}>{error}</Text>

          <ButtonsField style={{ indent: "topXl" }}>
            <Button
              style={{ indentRigth: "s", indentBottom: "s", height: "action", color: "action", padding: "action" }}
              onClick={onSaveClick}
            >
              <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>Save</Text>
            </Button>
            <Button 
              style={{ color: "control", padding: "action", height: "action", indentBottom: "xl" }}
              onClick={Back}
            >
              <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>Cancel</Text>
            </Button>
          </ButtonsField>
        </Form>
      </div>
    </>
  )
};

export default Settings;