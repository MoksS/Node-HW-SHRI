import React from "react";
import { withNaming } from '@bem-react/classname';

const cn = withNaming({ e: '_', m: '__', v: '-' })
const style = cn("Date");

const Date = (props) => {

  return (
    <div className={props.style !== undefined ? style(props.style) : "Date"}>
      <div className="Date_Day">
        <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
        <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m Date__DinamicColor-on">
          {props.startDate}
        </span>
      </div>
      <div className="Date_Hour">
        <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
        <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Date__DinamicColor-on">
          {props.duration}
        </span>
      </div>
    </div>
  )
};

export default Date;