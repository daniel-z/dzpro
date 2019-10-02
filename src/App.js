import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home/home";
import WIP from "./pages/wip/wip";
import MainLayout from "./layouts/main-layout";
import Experience from "./pages/cv/experience";
import {ROUTES} from "./constants";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout className="app">
          <Route exact path={ROUTES.HOME} component={Home}/>
          <Route exact path={ROUTES.EXPERIENCE} component={Experience}/>
          <Route exact path={ROUTES.ABOUT} component={WIP}/>
          <Route exact path={ROUTES.CODE} component={WIP}/>
        </MainLayout>
      </Router>
    );
  }
}

export default App;
