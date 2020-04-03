import React from "react";
import { withNaming } from '@bem-react/classname';

const cn = withNaming({ e: '_', m: '__', v: '-' })

const styles = cn('ButtonsField');

const ButtonsField = (props) => {
  let classes;

  if (props.style === undefined) {
    classes = "ButtonsField"
  } else {
    classes = styles(props.style);
  }

  return (
    <div className={classes}>
      {props.children}
    </div>
  )

};

export default ButtonsField;