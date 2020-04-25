import React, { MouseEvent, FC } from "react";
import cn from "../../helpers/bemCn";
import "./Buttons.scss";

const styles = cn('Button');

export interface ButtonProps {
  style?: {
    color?: "close" | "action" | "control";
    padding?: "action" | "control";
    indentRigth?: "s";
    indentBottom?: "s" | "xl";
    height?: "action" | "default";
    indentLeft?: "s"
  };
  onClick?(event: MouseEvent<HTMLButtonElement>): void;
}

const Button: FC<ButtonProps> = (props) => {
  let classes: string;

  if (props.style === undefined) {
    classes = "Button Button__color-control Button__padding-control Button__height-default"
  } else {
    classes = styles(props.style);
  }

  return (
    <button 
      className={classes}
      onClick={props.onClick}>
      {props.children}
    </button>
  )

};

export default Button;