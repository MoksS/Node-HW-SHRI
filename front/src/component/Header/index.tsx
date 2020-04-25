import React, { FC } from "react";
import { Link } from "react-router-dom"
import cn from "../../helpers/bemCn";
import "./Header.scss";

const Banner = cn('Header', 'Banner');

export interface HeadProps {
  link?: string;
  text: string;
  class?: {
    color?: "black"
    lineHeight: "l"
  }; 
}

const Header: FC<HeadProps> = (props) => {
  let classes;

  if (props.class === undefined) {
    classes = "Header_Banner Header_Banner__color-default"
  } else {
    classes = Banner(props.class);
  }

  return (
    <header className="Header">
    <div className="Header_Content">
    
    {props.link ? 
      <Link to={props.link}>
        <h1 className={classes}>{props.text}</h1>
      </Link>
      : <h1 className={classes}>{props.text}</h1>
    }
    {props.children}
    </div>
  </header>
  )

};

export default Header;