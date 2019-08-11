import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <nav>
          <Link to="/" className="navbar">
            <div>Home</div>
          </Link>
          <Link to="/about" className="navbar">
            <div>About</div>
          </Link>
          <Link to="/data" className="navbar">
            <div>Visualizing Stackathon</div>
          </Link>
        </nav>
      </div>
    );
  }
}
