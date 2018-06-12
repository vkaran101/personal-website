import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './../NavBar';
import './Page.css';

export default class Page extends Component {
  render() {
    return (
        <div>
          <NavBar />
        </div>
    );
  }
} 

