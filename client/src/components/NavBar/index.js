import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './../About';
import Portfolio from './../Portfolio';
import Blog from './../Blog';
import App from './../App';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="Header">
            <h3><Link to="/">VANDANA KARAN</Link></h3> 
          </div>
          <div className="NavBar">
            <ul>
              <li><Link to="/about">About Me</Link></li>
              <li><a>RESUME</a></li>
              <li><Link to="/portfolio">PORTFOLIO</Link></li>
              <li><Link to="/blog">BLOG</Link></li>
            </ul>
          </div>
          <Route exact={true} path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
        </div>
      </Router>
    );
  }
} 
