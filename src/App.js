import React from "react";
// import logo from "./logo.svg";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Detail } from "./pages/detail/Detail";
import { Overview } from "./pages/overview/Overview";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Overview />
          </Route>
          <Route exact path="/overview">
            <Overview />
          </Route>
          <Route exact path="/detail">
            <Detail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
