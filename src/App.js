import logo from './logo.svg';
import './App.css';
import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import VideoGrid from './components/videos/grid';
import SiteGrid from './components/websites/grid';
import AppGrid from './components/apps/grid';
import Nav from './components/nav';
import Intro from './components/intro';



function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <Nav />
            <Intro />
            <SiteGrid />
            <VideoGrid />
            <AppGrid />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
