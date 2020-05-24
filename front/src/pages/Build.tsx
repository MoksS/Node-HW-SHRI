import React, { useEffect, useState, FC } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import ButtonsField from "../component/Button/ButtonsField";
import Icon from "../component/Icon";
import Text from "../component/Text";
import Card from "../component/Card";
import PopUp from "../component/PopUp";
import { useSelector, useDispatch } from "react-redux";
import { getBuildList } from "../middleware/ajaxRequest";
import { StateInteface } from "../store";
import { Build as BuildInteface } from "../reducers/buildList";

const Build: FC = () => {
  const repName = useSelector((state: StateInteface) => state.repName);
  const buildList = useSelector((state: StateInteface) => state.buildList);
  const dispatch = useDispatch();

  const { lang } = window;

  const [popup, setPopup] = useState(false);

  const showPopUp = () => setPopup(true);

  useEffect(() => {

    document.title = "Build List";

    if (buildList.build.length < 1) {
      dispatch(getBuildList());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header
        text={repName}
        class={{ color: "black", lineHeight: "l" }}
        link="/build"
      >

        <ButtonsField style={{ column: "off" }}>
          <Button
            style={{ color: "control", padding: "control", height: "default" }}
            onClick={showPopUp}
          >
            <Icon style={{ size: "xl", img: "play" }} />
            <Text style={{ size: "m", lineHeight: "xxl", weight: "small", color: "default", hide: "on" }}>
              {lang.Build.Button.RunBuild}
            </Text>
          </Button>

          <Link to="/settings">
            <Button style={{ color: "control", indentLeft: "s", height: "default" }}>
              <Icon style={{ size: "xl", img: "control" }} />
            </Button>
          </Link>
        </ButtonsField>
      </Header>

      <div className="Content">
        {buildList.build.map((e: BuildInteface) =>{ 
          if (e.commitHash === undefined) {
            window.location.reload();
          }

          return (
          <Link to={`/build/${e.id}`} key={e.buildNumber}>
            <Card
              status={e.status}
              number={e.buildNumber}
              commit={e.commitMessage}
              branch={e.branchName}
              author={e.authorName}
              hash={e.commitHash.substring(0, 7)}
              start={e.start}
              duration={e.duration}
            />
          </Link>
        )}
        )}
        {buildList.finish ? "" :
          <ButtonsField>
            <Button
              style={{ color: "control", padding: "action", indentBottom: "xl" }}
              onClick={(e) => dispatch(getBuildList(buildList.build.length))}
            >
              <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>
              {lang.Build.Button.ShowMore}
              </Text>
            </Button>
          </ButtonsField>
        }
      </div>
      {popup ? 
        <PopUp hide={() => setPopup(false)} />
        :
        ""
      }
    </>
  )
};

export default Build;