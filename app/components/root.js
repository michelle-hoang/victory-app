import React from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import Homepage from './Homepage';
import About from './About';
import Navbar from './Navbar';
import Data from './Data';

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          {/* <div>
              <nav>
                <Link to="/" className="navbar">
                  <div>Home</div>
                </Link>
                <Link to="/about" className="navbar">
                  <div>About</div>
                </Link>
                <Link to="/resources" className="navbar">
                  <div>Visualizing Crime</div>
                </Link>
              </nav>
            </div> */}

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

// const mapState = state => ({
//   resources: state.resources,
//   practices: state.resources,
// });

// const mapDispatch = dispatch => ({
//   fetchResources: () => dispatch(fetchResources()),
// });

// export default connect(
//   mapState,
//   mapDispatch
// )(Root);
