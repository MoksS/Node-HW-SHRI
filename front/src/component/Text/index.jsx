import React from "react";
import { withNaming } from '@bem-react/classname';
import "./Text.scss";

const cn = withNaming({ e: '_', m: '__', v: '-' })

const styles = cn('Text');

const Text = (props) => {
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