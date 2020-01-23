import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { EpisodeList } from "./components/pages/episodeList/EpisodeList";
import { OverviewPage } from "./components/pages/overviewPage/OverviewPage";
import { Episode } from "./components/pages/episode/Episode";

import "./styles/global.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={OverviewPage} />
          <Route path="/episodes/:id" component={EpisodeList} />
          <Route path="/episode/:id" component={Episode} />
        </Switch>
      </Router>
    );
  }
}

export default App;
