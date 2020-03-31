import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import Button from "../component/Button";
import ButtonsField from "../component/ButtonsField";
import Icon from "../component/Icon";
import Text from "../component/Text";
import Card from "../component/Card";
import { host } from "../helpers/constant";
import PopUp from "../component/PopUp";
import { useSelector, useDispatch } from "react-redux";

const Build = () => {
  const repName = useSelector(state => state.repName);
  const buildList = useSelector(state => state.buildList);
  const dispatch = useDispatch();
  const [popup, setPopup] = useState("");

  const showPopUp = () => {
    setPopup(<PopUp hide={() => setPopup("")} />)
  }

  const fetchData = async (offset = 0, limit = 5) => {
    try {
      const list = await fetch(`${host}/api/builds?offset=${offset}&limit=${limit}`);
      const json = await list.json();
      dispatch({ type: "updateList", build: json.data })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    document.title = "Build List";

    if (buildList.length < 1) {
      fetchData();
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
            <Text style={{ size: "m", lineHeight: "xxl", weight: "small", color: "default", hide: "on" }}>Run build</Text>
          </Button>

          <Link to="/settings">
            <Button style={{ color: "control", indentLeft: "s", height: "default" }}>
              <Icon style={{ size: "xl", img: "control" }} />
            </Button>
          </Link>
        </ButtonsField>
      </Header>

      <div className="Content">
        {buildList.map(e => (
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
        )
        )}

        <ButtonsField>
          <Button
            style={{ color: "control", padding: "action", indentBottom: "xl" }}
            onClick={(e) => fetchData(buildList.length)}
          >
            <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>Show more</Text>
          </Button>
        </ButtonsField>
      </div>
      {popup}
    </>
  )
};

export default Build;