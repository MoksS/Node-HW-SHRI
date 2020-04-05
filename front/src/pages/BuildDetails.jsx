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
import { host } from "../helpers/constant";
import { useSelector, useDispatch } from "react-redux";
import { updateDetails } from "../reducers/actions";

const convert = new Convert({ fg: '#000', bg: '#000' });

function BuildDetails() {
  const state = useSelector(state => state.setting);
  const history = useHistory();
  // все это делалость бы на сервере, я за редиректы да и первоначальные состояния
  // но в северный рендеринг не смог ((
  if (state !== "/build") history.push("/");

  const repName = useSelector(state => state.repName);
  const buildDetails = useSelector(state => state.buildDetails);
  const dispatch = useDispatch();
  const { number } = useParams();

  const onRebuild = async (e) => {
    try {
      const response = await fetch(`${host}/api/builds/${buildDetails.commitHash}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(buildDetails)
      });

      const result = await response.json();

      history.push(`/build/${result.data.id}`);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = `Build ${number}`;
    console.log(number);
    dispatch({type: "loading"});
    const fetchData = async () => {
      try {
        const [list, log] = await Promise.all([
          fetch(`${host}/api/builds/${number}`),
          fetch(`${host}/api/builds/${number}/logs`)
        ]);
        const [json, logJson] = await Promise.all([
          list.json(),
          log.json()
        ]);

        json.data.log = logJson.data;
        dispatch(updateDetails(json.data));
      } catch (error) {
        console.log(error);
        history.push(`/build`);
      }
    }
    fetchData();
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
            onClick={onRebuild}
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