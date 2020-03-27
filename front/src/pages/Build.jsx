import React, { useEffect } from "react";
import Header from "../component/Header";
import Button from "../component/Button";
import ButtonsField from "../component/ButtonsField";
import Icon from "../component/Icon";
import Text from "../component/Text";
import Card from "../component/Card";
import Date from "../component/Date";

const Build = () => {

  useEffect(() => {
    document.title = "Build List";
  }, []);

  return (
    <>
      <Header
        text="philip1967/my-awesome-repo-with-long-long-long-repo-name"
        class={{ color: "black", lineHeight: "l" }}>

        <ButtonsField style={{ column: "off" }}>
          <Button style={{ color: "control", padding: "control", height: "default" }}>
            <Icon style={{ size: "xl", img: "play" }} />
            <Text style={{ size: "m", lineHeight: "xxl", weight: "small", color: "default", hide: "on" }}>Run build</Text>
          </Button>

          <Button style={{ color: "control", indentLeft: "s", height: "default" }}>
            <Icon style={{ size: "xl", img: "control" }} />
          </Button>
        </ButtonsField>
      </Header>

      <div className="Content">

        <Card
          status="success"
          number="1368"
          commit="add documentation for postgres scaler"
          branch="master"
          author="Philip Kirkorov"
          hash="9c9f0b9"
        >
          <Date 
            startDate="21 янв, 03:06"
            duration="1 ч 20 мин"
          />  
        </Card>

        <div className="Card Card__indentBottom-s">
          <div className="Card_Info">
            <div className="Card_Build Card_Build__indentBottom-s">
              <div className="Card_Status">
                <span className="Icon Icon__indentRigth-s Icon__size-default Icon__img-success"></span>
                <span className="Text Text__size-l Text__weight-normal Text__lineHeight-xl Text__color-green">#1368</span>
              </div>
              <span className="Text Text__indentLeft-xs Text__size-s Text__weight-small Text__lineHeight-xl Text__color-default">add documentation for postgres scaler</span>
            </div>
            <div className="Card_Commit Card_Commit__indentLeft-xxl">
              <div className="Card_Branch Card_Branch__indentRigth-l ">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-code"></span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">master</span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-hash">9c9f0b9</span>
              </div>
              <div className="Card_User">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-user"></span>
                <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">Philip Kirkorov</span>
              </div>
            </div>
          </div>
          <div className="Date">
            <div className="Date_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Date_Hour">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary">1 ч 20 мин</span>
            </div>
          </div>
        </div>
        <div className="Card Card__indentBottom-s">
          <div className="Card_Info">
            <div className="Card_Build Card_Build__indentBottom-s">
              <div className="Card_Status">
                <span className="Icon Icon__indentRigth-s Icon__size-default Icon__img-error"></span>
                <span className="Text Text__size-l Text__weight-normal Text__lineHeight-xl Text__color-red">#1368</span>
              </div>
              <span className="Text Text__indentLeft-xs Text__size-s Text__weight-small Text__lineHeight-xl Text__color-default">Super cool UI kit for making websites that look like games</span>
            </div>
            <div className="Card_Commit Card_Commit__indentLeft-xxl">
              <div className="Card_Branch Card_Branch__indentRigth-l ">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-code"></span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">master</span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-hash">9c9f0b9</span>
              </div>
              <div className="Card_User">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-user"></span>
                <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">Philip Kirkorov</span>
              </div>
            </div>
          </div>
          <div className="Date">
            <div className="Date_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Date_Hour">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary">1 ч 20 мин</span>
            </div>
          </div>
        </div>
        <div className="Card Card__indentBottom-s">
          <div className="Card_Info">
            <div className="Card_Build Card_Build__indentBottom-s">
              <div className="Card_Status">
                <span className="Icon Icon__indentRigth-s Icon__size-default Icon__img-time"></span>
                <span className="Text Text__size-l Text__weight-normal Text__lineHeight-xl Text__color-orange">#1368</span>
              </div>
              <span className="Text Text__indentLeft-xs Text__size-s Text__weight-small Text__lineHeight-xl Text__color-default">Merge branch 'master' of github.com:jaywcjlove/awesome</span>
            </div>
            <div className="Card_Commit Card_Commit__indentLeft-xxl">
              <div className="Card_Branch Card_Branch__indentRigth-l ">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-code"></span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">master</span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-hash">9c9f0b9</span>
              </div>
              <div className="Card_User">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-user"></span>
                <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">Philip Kirkorov</span>
              </div>
            </div>
          </div>
          <div className="Date">
            <div className="Date_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Date_Hour">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary">1 ч 20 мин</span>
            </div>
          </div>
        </div>
        <div className="Card Card__indentBottom-s">
          <div className="Card_Info">
            <div className="Card_Build Card_Build__indentBottom-s">
              <div className="Card_Status">
                <span className="Icon Icon__indentRigth-s Icon__size-default Icon__img-success"></span>
                <span className="Text Text__size-l Text__weight-normal Text__lineHeight-xl Text__color-green">#1368</span>
              </div>
              <span className="Text Text__indentLeft-xs Text__size-s Text__weight-small Text__lineHeight-xl Text__color-default">add documentation for postgres scaler</span>
            </div>
            <div className="Card_Commit Card_Commit__indentLeft-xxl">
              <div className="Card_Branch Card_Branch__indentRigth-l ">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-code"></span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">master</span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-hash">9c9f0b9</span>
              </div>
              <div className="Card_User">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-user"></span>
                <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">Philip Kirkorov</span>
              </div>
            </div>
          </div>
          <div className="Date">
            <div className="Date_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Date_Hour">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary">1 ч 20 мин</span>
            </div>
          </div>
        </div>
        <div className="Card Card__indentBottom-s">
          <div className="Card_Info">
            <div className="Card_Build Card_Build__indentBottom-s">
              <div className="Card_Status">
                <span className="Icon Icon__indentRigth-s Icon__size-default Icon__img-success"></span>
                <span className="Text Text__size-l Text__weight-normal Text__lineHeight-xl Text__color-green">#1368</span>
              </div>
              <span className="Text Text__indentLeft-xs Text__size-s Text__weight-small Text__lineHeight-xl Text__color-default">add documentation for postgres scaler</span>
            </div>
            <div className="Card_Commit Card_Commit__indentLeft-xxl">
              <div className="Card_Branch Card_Branch__indentRigth-l ">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-code"></span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">master</span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-hash">9c9f0b9</span>
              </div>
              <div className="Card_User">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-user"></span>
                <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">Philip Kirkorov</span>
              </div>
            </div>
          </div>
          <div className="Date">
            <div className="Date_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Date_Hour">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary">1 ч 20 мин</span>
            </div>
          </div>
        </div>
        <div className="Card Card__indentBottom-s">
          <div className="Card_Info">
            <div className="Card_Build Card_Build__indentBottom-s">
              <div className="Card_Status">
                <span className="Icon Icon__indentRigth-s Icon__size-default Icon__img-success"></span>
                <span className="Text Text__size-l Text__weight-normal Text__lineHeight-xl Text__color-green">#1368</span>
              </div>
              <span className="Text Text__indentLeft-xs Text__size-s Text__weight-small Text__lineHeight-xl Text__color-default">add documentation for postgres scaler</span>
            </div>
            <div className="Card_Commit Card_Commit__indentLeft-xxl">
              <div className="Card_Branch Card_Branch__indentRigth-l ">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-code"></span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">master</span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-hash">9c9f0b9</span>
              </div>
              <div className="Card_User">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-user"></span>
                <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">Philip Kirkorov</span>
              </div>
            </div>
          </div>
          <div className="Date">
            <div className="Date_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Date_Hour">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary">1 ч 20 мин</span>
            </div>
          </div>
        </div>
        <div className="Card Card__indentBottom-s">
          <div className="Card_Info">
            <div className="Card_Build Card_Build__indentBottom-s">
              <div className="Card_Status">
                <span className="Icon Icon__indentRigth-s Icon__size-default Icon__img-success"></span>
                <span className="Text Text__size-l Text__weight-normal Text__lineHeight-xl Text__color-green">#1368</span>
              </div>
              <span className="Text Text__indentLeft-xs Text__size-s Text__weight-small Text__lineHeight-xl Text__color-default">add documentation for postgres scaler</span>
            </div>
            <div className="Card_Commit Card_Commit__indentLeft-xxl">
              <div className="Card_Branch Card_Branch__indentRigth-l ">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-code"></span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">master</span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-hash">9c9f0b9</span>
              </div>
              <div className="Card_User">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-user"></span>
                <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">Philip Kirkorov</span>
              </div>
            </div>
          </div>
          <div className="Date">
            <div className="Date_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Date_Hour">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary">1 ч 20 мин</span>
            </div>
          </div>
        </div>
        <div className="Card Card__indentBottom-s">
          <div className="Card_Info">
            <div className="Card_Build Card_Build__indentBottom-s">
              <div className="Card_Status">
                <span className="Icon Icon__indentRigth-s Icon__size-default Icon__img-success"></span>
                <span className="Text Text__size-l Text__weight-normal Text__lineHeight-xl Text__color-green">#1368</span>
              </div>
              <span className="Text Text__indentLeft-xs Text__size-s Text__weight-small Text__lineHeight-xl Text__color-default">add documentation for postgres scaler</span>
            </div>
            <div className="Card_Commit Card_Commit__indentLeft-xxl">
              <div className="Card_Branch Card_Branch__indentRigth-l ">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-code"></span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">master</span>
                <span className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-hash">9c9f0b9</span>
              </div>
              <div className="Card_User">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-user"></span>
                <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">Philip Kirkorov</span>
              </div>
            </div>
          </div>
          <div className="Date">
            <div className="Date_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Date_Hour">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary">1 ч 20 мин</span>
            </div>
          </div>
        </div>
        <ButtonsField>
          <Button style={{ color: "control", padding: "action", indentBottom: "xl" }}>
            <Text style={{ size: "m", lineHeight: "xxxxl", weight: "small", color: "default" }}>Show more</Text>
          </Button>
        </ButtonsField>
      </div>
    </>
  )
};

export default Build;