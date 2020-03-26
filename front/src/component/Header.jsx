import React from "react";
import { withNaming } from '@bem-react/classname';

const cn = withNaming({ e: '_', m: '__', v: '-' })

const Banner = cn('Header', 'Banner');

const Header = (props) => {
  let classes;

  if (props.class === undefined) {
    classes = "Header_Banner Header_Banner__color-default"
  } else {
    classes = Banner(props.class);
  }

  return (
    <header className="Header">
    <div className="Header_Content">
    <h1 className={classes}>{props.text}</h1>
    {props.children}
    </div>
  </header>
  )

};

export default Header;