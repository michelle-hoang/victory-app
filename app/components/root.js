import React from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './Homepage';
import AllResources from './AllResources';
import AllPractices from './AllPractices';
import AddPracticeForm from './AddPracticeForm';
import About from './About';
import Why from './Why';

import { fetchResources } from '../redux/resources';

class Root extends React.Component {
  componentDidMount() {
    this.props.fetchResources();
  }
  render() {
    return (
      <Router>
        <div>
          <nav>
            {/* <div className="nav1"> */}
            <Link to="/" className="navbar">
              <div>Home</div>
            </Link>
            <Link to="/about" className="navbar">
              <div>About Sustainability</div>
            </Link>
            {/* </div> */}
            {/* <div className="nav2"> */}
            <Link to="/resources" className="navbar">
              <div>Environmental Resources</div>
            </Link>
            <Link to="/practices" className="navbar">
              <div>Sustainable Practices</div>
            </Link>
            <Link to="/motivation" className="navbar">
              <div>Why Go Green?</div>
            </Link>
            {/* <Link to="/contactme" className="navbar">
                <div>Contact Me</div>
              </Link> */}
            {/* </div> */}
          </nav>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resources" component={AllResources} />
            <Route exact path="/motivation" component={Why} />
            <Route exact path="/practices" component={AllPractices} />
            {/* <Route exact path="/addpractice" component={AddPracticeForm} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapState = state => ({
  resources: state.resources,
  practices: state.resources,
});

const mapDispatch = dispatch => ({
  fetchResources: () => dispatch(fetchResources()),
});

export default connect(
  mapState,
  mapDispatch
)(Root);
