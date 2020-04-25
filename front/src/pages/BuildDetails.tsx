import React, { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import Convert from "ansi-to-html";
import Header from "../component/Header";
import ButtonsField from "../component/Button/ButtonsField";
import Button from "../component/Button";
import Icon from "../component/Icon";
import Text from "../component/Text";
import Card from "../component/Card";
import Preloader from "../component/Preloader";
import { useSelector, useDispatch } from "react-redux";
import { getBuildDetails, onRebuild } from "../middleware/ajaxRequest";
import { StateInteface } from "../store";

const convert = new Convert({ newline: true, fg: "#000" });

function BuildDetails() {
  const history = useHistory();
  const repName = useSelector((state: StateInteface) => state.repName);
  const buildDetails = useSelector((state: StateInteface) => state.buildDetails);
  const dispatch = useDispatch();
  const { number } = useParams();

  useEffect(() => {
    document.title = `Build ${number}`;

    if (number) {
      dispatch(getBuildDetails(number, history));
    }
    // eslint-disable-next-line
  }, [number]);

  return (
    <>
      <Header
        text={repName}
        class={{ color: "black", lineHeight: "l" }}
        link={"/build"}
      >

        <ButtonsField style={{ column: "off" }}>
          <Button
            style={{ color: "control", padding: "control", height: "default" }}
            onClick={() => onRebuild(buildDetails, history)}
          >
            <Icon style={{ size: "xl", img: "rebuild" }} />
            <Text style={{ size: "m", lineHeight: "xxl", weight: "small", color: "default", hide: "on" }}>Rebuild</Text>
          </Button>
          <Link to="/settings">
            <Button style={{ color: "control", indentLeft: "s", height: "default" }}>
              <Icon style={{ size: "xl", img: "control" }} />
            </Button>
          </Link>
        </ButtonsField>
      </Header>

      <div className="Content">
        {buildDetails.loading ? 
          <Preloader /> :
          <>
            <Card
              status={buildDetails.status}
              number={buildDetails.buildNumber}
              commit={buildDetails.commitMessage}
              branch={buildDetails.branchName}
              author={buildDetails.authorName}
              hash={buildDetails.commitHash.substring(0, 7)}
              start={buildDetails.start}
              duration={buildDetails.duration}
            />
            <div className="Log" dangerouslySetInnerHTML={{ __html: convert.toHtml(buildDetails.log) }}></div>
          </>
        }
        {/* опасно, понимаю,но не знаю как сделать правильно, траспилировать? проверять на тег скрипт, или библиотека сама все делает?*/}
        {/* <div className="Log" dangerouslySetInnerHTML={{ __html: convert.toHtml('\x1b[30mblack\x1b[37mwhite')}}>  */}
      </div>
    </>
  )
};

export default BuildDetails;