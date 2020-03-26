import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import ButtonsField from "../component/ButtonsField";
import Button from "../component/Button";

const main = "jajaja"

const BuildDetails = () => {
  const { number } = useParams();

  useEffect(() => {
    document.title = `Build ${number}`;
  }, [number]);

  return (
    <>
      <Header
        text="philip1967/my-awesome-repo-with-long-long-long-repo-name"
        class={{ color: "black", lineHeight: "l" }}>

        <ButtonsField style={{ column: "off" }}>
          <Button style={{ color: "control", padding: "control", height: "default" }}>
            <span className="Icon Icon__size-xl Icon__img-rebuild"></span>
            <span className="Text Text__size-m Text__lineHeight-xxl Text__weight-small Text__color-default Text__hide-on">Rebuild</span>
          </Button>

          <Button style={{ color: "control", indentLeft: "s", height: "default" }}>
            <span className="Icon Icon__size-xl Icon__img-control"></span>
          </Button>
        </ButtonsField>
      </Header>

      <div className="Content">
        <div className="Card Card__indentBottom-s Card__column-on">
          <div className="Card_Info">
            <div className="Card_Build Card_Build__indentBottom-s">
              <div className="Card_Status">
                <span className="Icon Icon__indentRigth-s Icon__size-default Icon__img-success"></span>
                <span className="Text Text__size-l Text__weight-normal Text__lineHeight-xl Text__color-green">#1368</span>
              </div>
              <span
                className="Text Text__indentLeft-xs Text__size-s Text__weight-small Text__lineHeight-xl Text__color-default">add
            documentation for postgres scaler</span>
            </div>
            <div className="Card_Commit Card_Commit__border-bottom Card_Commit__indentLeft-xxl">
              <div className="Card_Branch Card_Branch__indentRigth-l ">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-code"></span>
                <span
                  className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">master</span>
                <span
                  className="Text Text__indentRigth-xs Text__size-m Text__weight-small Text__lineHeight-l Text__color-hash">9c9f0b9</span>
              </div>
              <div className="Card_User">
                <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-user"></span>
                <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-default">Philip
              Kirkorov</span>
              </div>
            </div>
          </div>
          <div className="Card_Date Card_Date__row-on Card_Date__marginLeftTop-on">
            <div className="Card_Day">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-calendar"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Text__indentRigth-m Card_Date__DinamicColor-on">21 янв,
            03:06</span>
            </div>
            <div className="Card_Hour">
              <span className="Icon Icon__indentRigth-xs Icon__size-xs Icon__img-clock"></span>
              <span className="Text Text__size-m Text__weight-small Text__lineHeight-l Text__color-secondary Card_Date__DinamicColor-on">1 ч 20 мин</span>
            </div>
          </div>
        </div>
        <pre className="Log">
          Starting type checking and linting service...
          Using 1 worker with 2048MB memory limit
          Hash: d54ed20309f352b3bda76cbbb6d272ed6afde438bd7a265eb08db3624c32dfc883a8c379c67f4de6
          Version: webpack 4.41.6
          Child
          Hash: d54ed20309f352b3bda7
          Time: 40364ms
          Built at: 2020-02-23 16:04:54
          Asset Size Chunks Chunk Names
          0.bundle.static.css 1.31 MiB 0 [emitted] vendors~main
          0.bundle.static.js 10.3 MiB 0 [emitted] vendors~main
          bundle.static.css 48.6 KiB 1 [emitted] main
          bundle.static.js 613 KiB 1 [emitted] main
          static/media/Cat.afa2191f.svg 9.83 KiB [emitted]
          static/media/illustration.a17c1b18.svg 14.8 KiB [emitted]
          static/media/picture.eef6f3b8.svg 16.2 KiB [emitted]
          Entrypoint main = 0.bundle.static.css 0.bundle.static.js bundle.static.css bundle.static.js
          [./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {0} [built]
          [./src/account/actions/index.ts] 2.46 KiB {1} [built]
          [./src/account/api/lib/models/index.ts] 2.17 KiB {1} [built]
          [./src/account/api/lib/models/mappers.ts] 21 KiB {1} [built]
          [./src/account/api/lib/schoolaccountAPI.ts] 4.97 KiB {1} [built]
          [./src/account/api/lib/schoolaccountAPIContext.ts] 1.73 KiB {1} [built]
          [./src/account/epics/index.ts] 328 bytes {1} [built]
          [./src/account/epics/pageData.ts] 834 bytes {1} [built]
          [./src/account/epics/personalPage.ts] 2.29 KiB {1} [built]
          [./src/account/epics/registrationForm.ts] 910 bytes {1} [built]
          [./src/account/index.tsx] 561 bytes {1} [built]
          [./src/account/reducers/githubRepos.ts] 837 bytes {1} [built]
          [./src/account/reducers/index.ts] 1.83 KiB {1} [built]
          [./src/account/reducers/serverError.ts] 526 bytes {1} [built]
          [./src/account/store.ts] 1.05 KiB {1} [built]
          + 1864 hidden modules
          Child
          Hash: 6cbbb6d272ed6afde438
          Time: 32877ms
          Built at: 2020-02-23 16:04:47
          Asset Size Chunks Chunk Names
          server.js 6.34 MiB main [emitted] main
          Entrypoint main = server.js
          [./src/account/actions/index.ts] 2.46 KiB {main} [built]
          [./src/account/api/lib/models/index.ts] 2.17 KiB {main} [built]
          [./src/account/api/lib/models/mappers.ts] 21 KiB {main} [built]
          [./src/account/api/lib/schoolaccountAPI.ts] 4.97 KiB {main} [built]
          [./src/account/api/lib/schoolaccountAPIContext.ts] 1.73 KiB {main} [built]
          [./src/account/epics/index.ts] 328 bytes {main} [built]
          [./src/account/epics/pageData.ts] 834 bytes {main} [built]
          [./src/account/epics/personalPage.ts] 2.29 KiB {main} [built]
          [./src/account/epics/registrationForm.ts] 910 bytes {main} [built]
          [./src/account/mappers/index.ts] 2.18 KiB {main} [built]
          [./src/account/reducers/githubRepos.ts] 837 bytes {main} [built]
          [./src/account/reducers/index.ts] 1.83 KiB {main} [built]
          [./src/account/reducers/serverError.ts] 526 bytes {main} [built]
          [./src/account/server.tsx] 1.62 KiB {main} [built]
          [./src/account/store.ts] 1.05 KiB {main} [built]
          + 1484 hidden modules
        </pre>
      </div>
    </>
  )
};

export default BuildDetails;