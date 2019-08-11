import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import Navbar from './Navbar';
import Data from './Data';

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="directoryContainer">
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/data" component={Data} />
          </Switch>
        </div>
      </Router>
    );
  }
}
