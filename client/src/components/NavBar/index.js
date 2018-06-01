import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './../App';
import Portfolio from './../Portfolio';
import Blog from './../Blog';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <div className="NavBar">
          <div>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><a>RESUME</a></li>
              <li><Link to="/portfolio">PORTFOLIO</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
            </ul>
          <Route exact={true} path="/" component={App} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          </div>
        </div>
      </Router>
    );
  }
} 
