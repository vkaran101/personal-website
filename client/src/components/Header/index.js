import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './../App';
import NavBar from './../NavBar';

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div className="Header">
          <div>
            <h2><Link to="/">VANDANA KARAN</Link></h2> 
          <Route exact={true} path="/" component={App} />
          </div>
          <NavBar />
        </div>
      </Router>
    );
  }
} 
