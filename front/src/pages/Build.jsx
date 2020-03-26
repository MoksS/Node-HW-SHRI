import React, { useEffect } from "react";
import Header from "../component/Header";
import Button from "../component/Button";
import ButtonsField from "../component/ButtonsField";

const Build = () => {

  useEffect(() => {
    document.title = "Build List";
  }, []);

  return (
    <>
      <Header
        text="philip1967/my-awesome-repo-with-long-long-long-repo-name"
        class={{ color: "black", lineHeight: "l" }}>

        <ButtonsField style={{column: "off"}}>
          <Button style={{ color: "control", padding: "control", height: "default" }}>
            <span className="Icon Icon__size-xl Icon__img-play"></span>
            <span className="Text Text__size-m Text__lineHeight-xxl Text__weight-small Text__color-default Text__hide-on">Run build</span>
          </Button>

          <Button style={{ color: "control", indentLeft: "s", height: "default" }}>
            <span className="Icon Icon__size-xl Icon__img-control"></span>
          </Button>
        </ButtonsField>
  
      </Header>

      <div className="Content">
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
          <div className="Card_Date">
            <div className="Card_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Card_Hour">
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
          <div className="Card_Date">
            <div className="Card_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Card_Hour">
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
          <div className="Card_Date">
            <div className="Card_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Card_Hour">
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
          <div className="Card_Date">
            <div className="Card_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Card_Hour">
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
          <div className="Card_Date">
            <div className="Card_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Card_Hour">
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
          <div className="Card_Date">
            <div className="Card_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Card_Hour">
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
          <div className="Card_Date">
            <div className="Card_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Card_Hour">
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
          <div className="Card_Date">
            <div className="Card_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m">21 янв, 03:06</span>
            </div>
            <div className="Card_Hour">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary">1 ч 20 мин</span>
            </div>
          </div>
        </div>
        <ButtonsField>
          <Button style={{ color: "control", padding: "action", indentBottom: "xl" }}>
            <span className="Text Text__size-m Text__lineHeight-xxxxl Text__weight-small Text__color-default">Show more</span>
          </Button>
        </ButtonsField>
      </div>
    </>
  )
};

export default Build;