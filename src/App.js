import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const hello = process.env.REACT_APP_TEST;
const apodUrl = process.env.REACT_APP_APOD_BASE_URL;
const apodKey = process.env.REACT_APP_APOD_API_KEY;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>
            Welcome to{apodUrl} {apodKey} React {hello}
          </h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
