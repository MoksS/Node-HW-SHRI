import React, { useRef, FC } from "react";
import Button from "./../Button";
import Icon from "./../Icon";
import MaskedInput from 'react-text-mask'
import "./Input.scss";

export interface InputProps {
  bind?: boolean;
  head?: string;
  placeholder?: string;
  id?: string;
  textMask?: RegExp[];
  name?: string;
  value?: string | number;
  type?: string;
  span?: string; 
  onChange? (evt :React.ChangeEvent<HTMLInputElement>): void;
}

const Input: FC<InputProps> = (props) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const clearInput = () => {
    if (inputEl.current) {
      inputEl.current.value = "";
    }
  }

  const bindInput = props.bind ? <span className="Input_Bind"> *</span> : "";
  let input;

  if (props.textMask !== undefined && Array.isArray(props.textMask)) {
    input = (
      <div className="Input Input__flex-active">
        <p className="Input_Head Input_Head__indent-none Input_Head__indent-rigth">{props.head}</p>
        <div className="Input_Field  Input_Field__sizeWidth-small Input_Field__position-rigth">
          <MaskedInput 
            mask={props.textMask} 
            className="Input_Input Input_Input__sizeWidth-small" 
            placeholder={props.placeholder}
            id={props.id} 
            name={props.name}
            defaultValue={props.value}
            placeholderChar={"\u2000"}
            onChange={props.onChange}
          />
          {/* <input className="Input_Input Input_Input__sizeWidth-small" type="text" maxLength="2" placeholder="10" name="minutes" defaultValue="10" /> */}
        </div>
        {props.span !== undefined ? <span className="Input_Span">{props.span}</span> : ""}
      </div>
    )
  } else {
    input = (
      <div className="Input">
        <p className="Input_Head">{props.head || ""}{bindInput}</p>
        <div className="Input_Field">
          <input
            className="Input_Input"
            type={props.type}
            placeholder={props.placeholder}
            name={props.name} 
            id={props.id}
            defaultValue={props.value}
            ref={inputEl}
          />
          <Button style={{ color: "close" }} onClick={clearInput}>
            <Icon style={{ size: "xs", img: "close" }} />
          </Button>
        </div>
        {props.span !== undefined ? <span className="Input_Span">{props.span}</span> : ""}
      </div>
    )
  }

  return input;
};

export default Input;