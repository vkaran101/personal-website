import React, { Component } from 'react';
import profile from './../../img/profile.jpg';
import './App.css';
import { Image  } from 'react-bootstrap';

export default class App extends Component {
  state = {
    response: ''
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callApi = async() => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    return (
      <div>
        <div className='App-profile'>
          <Image src={profile} responsive />
        </div>
        <div className='App-body'>
          <p>Hi! My name is Vandana. I am a senior at Northeastern University, pursuing my B.S. in Computer Science and Finance.
          </p>
        </div>
          <p className="App-intro">{this.state.response} </p>
      </div>
    );
  }
}

