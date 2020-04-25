import React, { FC } from "react";
import cn from "../../helpers/bemCn";
import "./Icon.scss";

const styles = cn('Icon');

export interface IconProps {
  style?: {
    size?: "xs" | "xl";
    img?: "close" | "control" | "play" | "rebuild";
  };
}

const Icon: FC<IconProps> = (props) => {
  let classes;

  if (props.style === undefined) {
    classes = "Icon"
  } else {
    classes = styles(props.style);
  }

  return <span className={classes} />
};

export default Icon;