import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Footer from "./component/Footer";
import './sass/App.scss';
import StartScreen from './pages/StartScreen';
import Settings from './pages/Settings';
import Build from './pages/Build';
import BuildDetails from './pages/BuildDetails';
import { host } from "./helpers/constant";
import { useSelector, useDispatch } from "react-redux";
import { settingsOn, setName } from "./reducers/actions";
import { StateInteface } from "./store";

function App() {
  const state = useSelector((state: StateInteface) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSettings = async () => {
      try {
        const check = await fetch(`${host}/checkSettings`);
        const res = await check.json();
        if (res.repoName !== undefined) {
          dispatch(settingsOn());
          dispatch(setName(res.repoName));
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
      <Footer />
    </>
  );
}

export default App;
