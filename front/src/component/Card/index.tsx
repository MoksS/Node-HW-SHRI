import React, { FC } from "react";
import Date from "../Date";
import { getDate, getDuration } from "../../helpers/time";
import "./Card.scss";

export interface CardProps {
  start?: string;
  duration?: number;
  column?: boolean;
  status?: string;
  number?: number;
  commit?: string;
  branch?: string;
  hash?: string;
  author?: string;
};

const Card: FC<CardProps> = (props) => {
  const date = props.start ? getDate(props.start) : false;

  const duration = getDuration(props.duration!);

  const status = `Icon Icon__indentRigth-s Icon__size-default Icon__img-${props.status}`

  return (
    <div className={props.column ? "Card Card__indentBottom-s Card__column-on" : "Card Card__indentBottom-s"}>
      <div className="Card_Info Card__flexBasic-80">
        <div className="Card_Build Card_Build__indentBottom-s">
          <div className="Card_Status">
            <span className={status}></span>
            <span className="Text Text__size-l Text__weight-normal Text__lineHeight-xl Text__color-green">#{props.number}</span>
          </div>
          <span className="Text Text__indentLeft-xs Text__size-s Text__weight-small Text__lineHeight-xl Text__color-default">{props.commit}</span>
        </div>
        <div className="Card_Commit Card_Commit__indentLeft-xxl">
          <div className="Card_Branch Card_Branch__indentRigth-l ">
            <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-code"></span>
            <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">{props.branch}</span>
            <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-hash">{props.hash}</span>
          </div>
          <div className="Card_User">
            <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-user"></span>
            <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">{props.author}</span>
          </div>
        </div>
      </div>
      {date === false ? 
        "" :
        <Date
        startDate={date}
        duration={duration}
      />
      }
    </div>

  );
}

export default Card;