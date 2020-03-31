import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './sass/App.scss';
import StartScreen from './pages/StartScreen';
import Settings from './pages/Settings';
import Build from './pages/Build';
import BuildDetails from './pages/BuildDetails';
import { host } from "./helpers/constant";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const state = useSelector(state => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSettings = async () => {
      try {
        const check = await fetch(`${host}/checkSettings`);
        const res = await check.json();
        if (res.repoName !== undefined) {
          dispatch({type: "settingsOn"});
          dispatch({type: "setName", name: res.repoName});
        }
      } catch (error) {
        console.log(error);
      }
    }
    checkSettings();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={StartScreen} exact path="/" />
          <Route component={Settings} exact path="/settings" />
          <Route component={Build} exact path="/build" />
          <Route component={BuildDetails} exact path="/build/:number" />
          <Route path="*">
            <Redirect to={state} />
          </Route>
        </Switch>
      </BrowserRouter>

      <footer className="Footer">
        <div className="Footer_Content">
          <div className="Link">
            <a className="Link_ATag" href="/#">Support</a>
            <a className="Link_ATag" href="/#">Learning</a>
          </div>
          <div className="Copyright">
            <p className="Copyright_Text">© 2020 Your Name</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
