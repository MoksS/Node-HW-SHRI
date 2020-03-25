import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './sass/App.scss';
import StartScreen from './pages/StartScreen';
import Settings from './pages/Settings';
import Build from './pages/Build';
import BuildDetails from './pages/BuildDetails';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
          <Route component={StartScreen} exact path="/"/>
          <Route component={Settings} exact path="/settings"/>
          <Route component={Build} exact path="/build"/>
          <Route component={BuildDetails} exact path="/build/:number"/>
          <Route path="*">
            <Redirect to="/"/>
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
