import React from "react";
import { withNaming } from '@bem-react/classname';

const cn = withNaming({ e: '_', m: '__', v: '-' })

const styles = cn('Icon');

const Icon = (props) => {
  let classes;

  if (props.style === undefined) {
    classes = "Icon"
  } else {
    classes = styles(props.style);
  }

  return <span className={classes} />
};

export default Icon;