import React, { useEffect, useRef, useState, MouseEvent, FC } from "react";
import { useHistory } from "react-router-dom";
import Header from "../component/Header";
import Form from "../component/Form";
import ButtonsField from "../component/Button/ButtonsField";
import Button from "../component/Button";
import Input from "../component/Input";
import Text from "../component/Text";
import { host } from "../helpers/constant";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
import { StateInteface } from "../store";

const Settings: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state: StateInteface) => state.setting);
  const currentLang = useSelector((state: StateInteface) => state.lang);

  const [error, setError] = useState("");
  const formEl = useRef<HTMLFormElement>(null);

  const { lang } = window;

  const [plurObj, setplurObj] = useState({
    head: lang.Settings.Input.period.head.other,
    span: lang.Settings.Input.period.span.other
  })


  useEffect(() => {
    document.title = "Settings";
  }, []);

  const Back = () => {
    history.push(state);
  }

  const onSaveClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const bt1 = e.currentTarget;
    const bt2 = bt1.nextSibling as HTMLButtonElement;

    bt1.setAttribute("disabled", "disabled");
    bt2.setAttribute("disabled", "disabled");

    try {
      // Осторожно, КОСТЫЛИ и неправильный код
      const formData = new FormData(formEl.current!);
      let jsonObject: any = {};

      // вообще без понятия как тут сделать, возможно это решается полностью переписыванием кода
      const data = formData.entries() as unknown as Array<[string, string | number]>;

      for (const [key, value] of data) {
        if ((key === "repoName" || key === "buildCommand") && value === "") {
          setError(lang.Settings.Error.invalidInput);
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

      const result = await response.json();

      if(response.status >= 400) {
        setError(result.data);
        bt1.removeAttribute("disabled");
        bt2.removeAttribute("disabled");
        return;
      }
      if (!result.success) {
        setError(result.error);
        bt1.removeAttribute("disabled");
        bt2.removeAttribute("disabled");
        return;
      }
      dispatch({type: "settingsOn"});
      dispatch({
        type: "setName", 
        name: jsonObject["repoName"]
      })
      return history.push("/build");

    } catch (error) {
      // если упал сервер или пропал интернет - пишешм что то, но не сегодня)
      // отправляем логи
      // и единственное мое универсальное решение, конечно же не идеальное)))
      setError(lang.Settings.Error.unknown);
      bt1.removeAttribute("disabled");
      bt2.removeAttribute("disabled");
    }

    bt1.removeAttribute("disabled");
    bt2.removeAttribute("disabled");
  };

  const onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = evt.currentTarget;
    const plural = new Intl.PluralRules(currentLang).select(+value);
    setplurObj({
      head: lang.Settings.Input.period.head[plural],
      span: lang.Settings.Input.period.span[plural]
    })
  }

  return (
    <>
      <Header text="School CI server" />

      <div className="Content">
        <Form
          header={lang.Settings.Form.header}
          descripton={lang.Settings.Form.descripton}
          name="settings"
          method="post"
          formRef={formEl}
        >

          <Input
            head={lang.Settings.Input.repoName.head}
            type="text"
            placeholder={lang.Settings.Input.repoName.placeholder}
            name="repoName"
            bind={true}
          />

          <Input
            head={lang.Settings.Input.buildCommand.head}
            type="text"
            placeholder={lang.Settings.Input.buildCommand.placeholder}
            name="buildCommand"
            bind={true}
          />

          <Input
            head={lang.Settings.Input.mainBranch.head}
            type="text"
            placeholder={lang.Settings.Input.mainBranch.placeholder}
            name="mainBranch"
          />

          <Input
            head={plurObj.head}
            placeholder={lang.Settings.Input.period.placeholder}
            name="period"
            span={plurObj.span}
            textMask={[/\d/, /\d/]}
            onChange={onChangeInput}
          />
          <Text style={{size: "l", weight: "normal", lineHeight: "xxl", color: "red"}}>{error}</Text>

          <ButtonsField style={{ indent: "topXl" }}>
            <Button
              style={{ indentRigth: "s", indentBottom: "s", height: "action", color: "action", padding: "action" }}
              onClick={onSaveClick}
            >
              <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>
                {lang.Settings.Button.Save}
              </Text>
            </Button>
            <Button 
              style={{ color: "control", padding: "action", height: "action", indentBottom: "xl" }}
              onClick={Back}
            >
              <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>
                {lang.Settings.Button.Cancel}
              </Text>
            </Button>
          </ButtonsField>
        </Form>
      </div>
    </>
  )
};

export default Settings;