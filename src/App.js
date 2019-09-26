import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import MainLayout from "./layouts/main-layout";
import CV from "./pages/cv/cv";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <MainLayout className="app">
          <Route exact path="/" component={Home} />
          <Route exact path="/cv" component={CV} />
          <Route exact path="/about" component={About} />
        </MainLayout>
      </Router>
    );
  }
}

export default App;
