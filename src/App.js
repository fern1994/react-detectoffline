import React, { Component } from 'react';
import './App.css';
import Online_Offline from './components/Online_Offline'
import Detect from './components/Detect'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Detect/>
      </div>
    );
  }
}

export default App;
