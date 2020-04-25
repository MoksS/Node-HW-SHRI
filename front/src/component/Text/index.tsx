import React, { FC } from "react";
import cn from "../../helpers/bemCn";
import "./Text.scss";

const styles = cn('Text');

export interface TextProps {
  style?: {
    size?: "m" | "l";
    lineHeight?: "xxxxl" | "xxl";
    weight?: "small" | "normal";
    color?: "default" | "red";
    hide?: "on";
  }; 
}

const Text: FC<TextProps> = (props) => {
  let classes;

  if (props.style === undefined) {
    classes = "Text"
  } else {
    classes = styles(props.style);
  }

  return (
    <span className={classes}>
      {props.children}
    </span>
  )
};

export default Text;