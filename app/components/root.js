import React from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './Homepage';
import MainInterests from './MainInterests';
import MainProjects from './MainProjects';
import Resume from './Resume';
import ContactForm from './ContactForm';
import AboutMe from './AboutMe';

import { fetchProjects } from '../redux/projects';

class Root extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }
  render() {
    return (
      <Router>
        <div className="outmost">
          <nav>
            <Link to="/" className="navbar">
              <div className="nav1">Home</div>
            </Link>
            <div className="nav2">
              <Link to="/interests" className="navbar">
                <div>My Interests</div>
              </Link>
              <Link to="/projects" className="navbar">
                <div>Selected Work</div>
              </Link>
              <Link to="/resume" className="navbar">
                <div>My Resume</div>
              </Link>
              <Link to="/aboutme" className="navbar">
                <div>About Me</div>
              </Link>
              {/* <Link to="/contactme" className="navbar">
                <div>Contact Me</div>
              </Link> */}
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/interests" component={MainInterests} />
            <Route exact path="/projects" component={MainProjects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/contactme" component={ContactForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapState = state => ({
  projects: state.projects,
});

const mapDispatch = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects()),
});

export default connect(
  mapState,
  mapDispatch
)(Root);
