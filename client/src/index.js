import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Header />,
  document.getElementById('root'));
registerServiceWorker();
